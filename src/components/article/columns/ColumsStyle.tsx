import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const ColumnsStyle = styled.div`
  display: flex;
  max-width: 50rem;
  @media ${DEVICE.maxxs} {
    flex-direction: column;
  }
  .wp-column {
    @media ${DEVICE.maxxs} {
      flex-basis: 100% !important; 
    }
  }
  p,em {
    color: #858585;
    font-size: 1.125rem;
  }
  figure {
    margin: 0;
  }
`
 