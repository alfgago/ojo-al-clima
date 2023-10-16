import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const ImageStyle = styled.figure`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  .img-wrapper{
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  figcaption {
    display: flex;
    padding: 1.5625rem;
    align-items: flex-start;
    gap: 0.625rem;
    background: #FFF;
    box-shadow: 0px 4px 43px 0px rgba(0, 0, 0, 0.09);
    span {
      color: #828282;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 1.575rem */
    }
  }
`
