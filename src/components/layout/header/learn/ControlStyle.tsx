import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

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
    &.active {
      pointer-events: none;
    }
    .heading {
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      background: ${props => GRADIENTS[props.color]};
      background-size: 100% 100vh;
      svg {
        transition: all 0.3s ease;
      }
      &.active {
        cursor: pointer;
        pointer-events: all;
        svg {
          transform: rotate(45deg);
        }
        z-index: 100;
      }
    }
    .name {
      height: calc(100% - 5rem);
      padding-top: 2rem;
      background: ${props => GRADIENTS[props.color]};
      opacity: 0;
      transition: all 0.3s ease;
      span {
        color: ${COLORS.white};
        font-size: 2rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        text-transform: uppercase;
        transform: rotate(90deg);
        display: block;
      }
      &.homepage {
        opacity: 1;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
`

interface ControlProps {
  color: string;
  index: number;
}
