import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE, GRADIENTS_VERTICALS } from "@/styles/variables"

export const HeadingStyle = styled.section<{color: string}>`
  background: ${COLORS.black};
  min-height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  .wrapper{
    max-width: 84.6875rem;
    width: 100%;
    margin: 0 auto;
    z-index: 10;
    h1 {
      color: ${COLORS.white};
      line-height: 1;
      padding-left: 1.5rem;
      position: relative;
      2px 4px 5px #0000002bl;
      @media ${DEVICE.maxmd} {
        margin-left: 2rem;
      }
      &:before {
        position: absolute;
        content: "";
        width: 0.6875rem;
        height: 100%;
        border-radius: 5rem;
        background: ${(props) => COLORS[props.color]};
        left: 0; \
        box-shadow: 2px 4px 5px #0000002b;
      }
    }
  }
  .gradient-wrapper {
    &:before {
      height: 40%;
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      z-index: 2;
      background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgb(255 255 255 / 94%) 90%);
    }
  }
  .learn-colors {
    position: absolute;
    display: flex;
    height: 100%;
    right: 0;
    z-index: 10;
    @media ${DEVICE.maxmd} {
      display: none;
    }
    div {
      width: 5.8rem;
      height: 100%;
      &.red {
        background: ${GRADIENTS_VERTICALS.red};
      }
      &.purple {
        background: ${GRADIENTS_VERTICALS.purple};
      }
      &.blue {
        background: ${GRADIENTS_VERTICALS.blue};
      }
      &.yellow {
        background: ${GRADIENTS_VERTICALS.yellow};
      }
    }
  }
`
