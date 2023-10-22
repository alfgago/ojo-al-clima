import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const QuienesSomosStyle = styled.section`
  background: ${COLORS.black};
  color: ${COLORS.white} !important;
  .wordpress-content {
    width: 84.4375rem;
    margin: auto;
    padding: 1rem 12rem 1rem 0;
    h1 {
      font-size: 4rem;
      margin-bottom: 3rem;
    }
    h2 {
      font-size: 3rem;
    }
 
    h1, h2, h3 {
      position: relative;
      padding-left: 2rem;
      line-height: 1;
      &:before {
        position: absolute;
        content: "";
        width: 0.6875rem;
        height: 100%;
        border-radius: 5rem;
        background: #6967F1;  
        left: 0;
      }
    }

    a, p, li {
      font-size: 1.5rem;
      color: ${COLORS.white};
    }

    li {
      &::marker { 
        color: ${COLORS.blue};
      }
      padding: 1.5rem 0;
    }

  }

`
