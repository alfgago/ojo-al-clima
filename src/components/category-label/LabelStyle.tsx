import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const LabelStyle = styled.div<{ gradient: string}>`
  .article-category{
    a {
      font-style: normal;
      text-transform: uppercase;
      text-decoration: none;
      background: ${(props) => GRADIENTS[props.gradient]};
    }

    &.normal {
      a {
        line-height: 1;
        display: block;
        font-weight: 900;
        font-size: 0.9375rem;
        padding-left: 1.2rem;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
        &:before {
          position: absolute;
          content: "";
          width: 0.625rem;
          height: 0.625rem;
          left: 0rem;
          border-radius: 100%;
          background: ${(props) => GRADIENTS[props.gradient]};     
        } 
      }
    }
    
    &.circle {
      a {
        line-height: normal;
        color: ${COLORS.white};
        font-size: 0.75rem;
        font-weight: 800;
        display: flex;
        padding: 0.4rem 1.25rem;
        justify-content: center;
        align-items: center;
        width: fit-content;
        border-radius: 1.875rem;
      }
    }
  }
`
