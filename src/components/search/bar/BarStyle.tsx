import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const BarStyle = styled.section`
  max-width: 84.6875rem;
  margin: 3.12rem auto;
  .bar-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    max-width: 55.25rem;
    .authors {
      select {
        border-radius: 3.125rem;
        border: 1px solid #000;
        background: rgba(255, 255, 255, 0.55);
        backdrop-filter: blur(2.5px);
        display: flex;
        min-width: 17.1875rem;
        width: 100%;
        padding: 0.75rem 1.5rem;
        align-items: center;
        gap: 5.5625rem;
        &:outline {
          border: none;
        }
      }
    }
    .search-wrapper {
      display: flex;
      flex: 1;
      gap: 0.75rem;
      .bar {
        flex: 1;
        input {
          height: 100%;
          width: 100%;
          display: flex;
          padding: 0.75rem 3.5625rem;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.625rem;
          border-radius: 3.125rem;
          border: 1px solid #000;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(2.5px);
          outline: none;
        }  
      }
      .btn {
        .search-icon {
          transition: all 0.6s ease;
          width: 2.9375rem;
          height: 2.9375rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          position: relative;
          border-radius: 3rem;
          cursor: pointer;
          svg {
            display: block;
            transition: all 0.6s ease;
            path {
              fill: #fff
            }
          }
          &:before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background: ${GRADIENTS.blue};
            z-index: -1;
            border-radius: 3rem;
            opacity: 1;
            transition: all 0.6s ease;
          }
        }
      }
    }
  }
`
