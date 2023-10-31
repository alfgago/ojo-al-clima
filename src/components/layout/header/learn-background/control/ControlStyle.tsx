import styled from "styled-components"

import { COLORS, GRADIENTS_VERTICALS, DEVICE, GRADIENTS } from "@/styles/variables"

const setDefaultPosition = (index: number) => {
  let baseValue = 17.4;
  let decrementValue = 5.8;

  let resultValue = baseValue - (index * decrementValue);

  if (resultValue < 0) resultValue = 0;

  return `right: calc(0% + ${resultValue}rem);`;
}

export const ControlStyle = styled.div<ControlProps>`
  .control-wrapper { 
    position: absolute;
    width: 5.8rem;
    height: 100vh; 
    ${props => setDefaultPosition(props.index)}
    z-index: 90;
    cursor: pointer;
    transition: all 0.3s ease;
    pointer-events: none;
    @media ${DEVICE.maxmd} {
      left: 0 !important;
      right: auto !important;
      width: 100vw !important;
      height: 7.5rem !important;
      display: flex;
      opacity: 0;
      pointer-events: none !important;
    }
    &.active {
      pointer-events: none;
    }
    .heading {
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${props => COLORS[props.color]};
      background-size: 100% 100vh;
      pointer-events: all;
      @media ${DEVICE.maxmd} {
        display: none;
      }
      svg {
        transition: all 0.3s ease;
      }
      &.active {
        cursor: pointer;
        @media ${DEVICE.md} {
          pointer-events: all;
        }
        svg {
          transform: rotate(45deg);
        }
        z-index: 100;
      }
      &:hover + .name {
        opacity: 1 !important;
      }
    }
    .name {
      height: calc(100% - 5rem);
      padding-top: 2rem;
      background: ${props => GRADIENTS_VERTICALS[props.color]};
      opacity: 0;
      transition: all 0.3s ease;
      @media ${DEVICE.md} {
        pointer-events: none;
        div {
          display: none;
        }
      }
      @media ${DEVICE.maxmd} {
        flex: 1;
        height: 100%;
        background: ${props => GRADIENTS[props.color]};
        padding-top: 0;
        display: flex;
        align-items: center;
        padding-left: 3rem;
        position: relative;
        .close {
          position: absolute;
          right: 2rem;
          svg {
            transform: rotate(45deg);
          }
        }
      }
      span {
        color: ${COLORS.white};
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        display: block;
        @media ${DEVICE.md} {
          transform: rotate(90deg);
          font-weight: 300;
        }
      }
      &.active { 
        opacity: 1;
        @media ${DEVICE.md} {
          pointer-events: all;
        }
      }
    }
  }
  &.current {
    .control-wrapper {
      opacity: 1;
      @media ${DEVICE.maxmd} {
        pointer-events: all !important;
        top: 6.5rem;
        .name {
          pointer-events: none;
        }
      }
    }
  }
`

interface ControlProps {
  color: string;
  index: number;
}
