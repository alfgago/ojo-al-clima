import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const BlockStyle = styled.div`
  .wp-content {
    h3,
    h4,
    h5 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
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
