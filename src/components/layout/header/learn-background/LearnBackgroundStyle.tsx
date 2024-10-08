import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"
 
export const LearnBackgroundStyle = styled.div<LearnProps>`
  .learn-item-container {
    width: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    background: ${props => COLORS[props.color]};
    opacity: 0;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
    .learn-item-wrapper { 
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh; 
    }
  }
`

interface LearnProps {
  color: string;
  index: number;
}
