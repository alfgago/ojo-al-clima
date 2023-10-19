import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

const setContentMargin = (index: number) => {
  return `calc(5.8rem + ${(index + 1) * 5.8}rem)`;
}
 
export const LearnStyle = styled.div<LearnProps>`
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
      max-width: 67rem;
      padding-top: 20rem;
      @media ${DEVICE.md} {
        margin-left: ${props => setContentMargin(props.index)}; 
        .banner-gradient {
          width: calc(100vw - 23.2rem);
          height: 100vh;
          margin-left: -5.8rem;
        }
      }
      .wordpress-content {
        h2:first-child {
          color: ${COLORS.white};
          font-size: 4rem;
        }
        a, p, li {
          color: ${COLORS.white};
          font-size: 1.5rem;
          font-style: normal;
          font-weight: 400;
        }
        blockquote {
          border: 3px solid #ffffff;
          padding: 0.8125rem 3.3125rem; 
          p {
            font-size: 1.25rem;
            font-style: italic;
          }
        }
      }
    }
  }
`

interface LearnProps {
  color: string;
  index: number;
}
