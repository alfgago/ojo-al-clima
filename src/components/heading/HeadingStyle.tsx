import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const HeadingStyle = styled.section<{color: string}>`
  background: ${COLORS.black};
  min-height: 7.5rem;
  box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .wrapper{
    max-width: 84.6875rem;
    width: 100%;
    margin: 0 auto;
    h1 {
      color: ${COLORS.white};
      line-height: 1;
      padding-left: 1.5rem;
      position: relative;
      &:before {
        position: absolute;
        content: "";
        width: 0.6875rem;
        height: 100%;
        border-radius: 5rem;
        background: ${(props) => COLORS[props.color]};
        left: 0;
      }
    }
  }
`
