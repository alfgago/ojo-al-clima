import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"


export const LoaderStyle = styled.div<{color:string}>`
  padding: 3rem 0;
  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid ${props => COLORS[props.color]};
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
`
