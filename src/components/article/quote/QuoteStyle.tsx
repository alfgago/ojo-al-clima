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
  border: 3px solid #137E24;
  @media ${DEVICE.maxxs} {
    padding: 1.2rem 1.5rem;
  }
  .content-wrapper{
    p {
      color: #5A5A5A;
      font-size: 1.25rem;
      font-style: italic;
      font-weight: 500;
      line-height: 140%; 
    }
  }
`
