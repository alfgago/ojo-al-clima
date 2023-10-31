import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const QuoteStyle = styled.blockquote`
  display: flex;
  padding: 1.2rem 3.3125rem;
  margin: 3rem 0;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
  border: 3px solid #fff;
  position: relative;
  @media ${DEVICE.maxxs} {
    padding: 1.2rem 1.5rem;
  }
  span {
    position: absolute;
    svg {
      display: block;
      width: 2.2rem;
      height: 2.2rem;
    }
    &.top {
      top: -9%;
      left: 6%;
      @media ${DEVICE.maxxs} {
        left: 2%;
      }
    } 
    &.down {
      bottom: -9%;
      right: 6%;
      @media ${DEVICE.maxxs} {
        right: 2%;
      }
    }
  } 
  .content-wrapper{
    width: 100%;
    p {
      color: #5A5A5A;
      font-size: 1.25rem;
      font-style: italic;
      font-weight: 500;
      line-height: 140%; 
      span {
        position: relative;
      }
    }
  }
`
