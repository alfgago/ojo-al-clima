import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const GradientStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;

  &:after {
    position: absolute;
    top: -10px;
    left: -10px;
    height: calc(100% + 20px);
    width: calc(100% + 20px);
    content: "";
    backdrop-filter: blur(10px);
    z-index: 1;
  }

  canvas {
    position: absolute;
    top: -10px;
    left: -10px;
    height: calc(100% + 20px);
    width: calc(100% + 20px);
    opacity: 1;
    z-index: 0;

    &#gradient-canvas {
      z-index: 1;
      --gradient-color-1: #27C840;
      --gradient-color-2: #137E24;
      --gradient-color-3: #27C840;
      --gradient-color-4: #137E24;
      
    }
  }
`
