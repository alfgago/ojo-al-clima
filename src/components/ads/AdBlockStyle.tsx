import styled from "styled-components"

import {
  COLORS,
  GRADIENTS,
  DEVICE,
  GRADIENTS_VERTICALS,
} from "@/styles/variables"

export const AdBlockStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  .ad-block{
    width: 100%;
    img {
      margin: 0 auto;
      display: block;
      width: auto;
      max-width: 100%;
      height: auto;
    }
    &.full {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`
