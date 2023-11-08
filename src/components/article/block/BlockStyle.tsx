import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const BlockStyle = styled.div`
  .wp-content {
    h3,
    h4,
    h5 {
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
    h4 {
      font-size: 1.6rem;
    }
    h5 {
      font-size: 1.4rem;
    }
    p {
      color: #242424;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 1.75rem */
    }
    a {
      color: #48A1BF;
      text-decoration-line: underline;
    }
    strong {
      font-weight: 800;
    }
  }
`
