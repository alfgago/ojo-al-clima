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
      height: 100%;
      min-height: 15rem;
      object-fit: cover;
    }
  }
  figcaption {
    display: flex;
    flex-direction: column;
    padding: 1.5625rem;
    align-items: flex-start;
    background: #FFF;
    box-shadow: 0px 4px 43px 0px rgba(0, 0, 0, 0.09);
    height: -webkit-fill-available;
    @media ${DEVICE.maxmd} {
      height: fit-content;
    }
    small,
    span {
      color: #828282;
      font-size: 1.125rem;
      font-style: italic;
      font-weight: 400;
      line-height: 140%; /* 1.575rem */
      display: block;
    }
    small {
      display: inline-block;
    }
  }
`
