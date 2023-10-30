import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

const hide = () => `
  opacity: 0 !important;
  pointer-events: none !important;
  display: none !important;
`

export const LayoutStyle = styled.main`
  &.hide-layout {
    .header-container {
      background: transparent !important;
      .content,
      .site-logo{
        ${hide}
      } 
      .learn-controls {
        background: transparent !important;
        .control-wrapper {
          position: fixed;
        }
      }
    }
    footer {
      ${hide}
    }
  }
`

