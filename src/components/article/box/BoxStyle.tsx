import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const BoxStyle = styled.div`
  .box {
    margin: 3rem 0;
    color: ${COLORS.black};
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 3.12rem;
    h2, h3, h4 {
      color: ${COLORS.black};
      font-size: 2rem;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      position: relative;
      padding-left: 2rem;
      &:before {
        position: absolute;
        content: "";
        width: 0.6875rem;
        height: 100%;
        border-radius: 5rem;
        background: ${GRADIENTS.gray};  
        left: 0;
      }
    }
    img {
      width: 100%;
      display: block; 
      margin: 2rem 0;
    }
  }
`
