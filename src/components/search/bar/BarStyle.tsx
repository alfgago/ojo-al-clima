import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const BarStyle = styled.section`
  max-width: 84.6875rem;
  margin: 3.12rem auto;
  @media ${DEVICE.maxmd} {
    padding: 0 2rem;
  }
  .bar-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    max-width: 55.25rem;
    .authors {
      @media ${DEVICE.maxxss} {
        width: 100%;
      } 
      input {
        padding: 0.75rem 1.62rem;
        height: 2.9375rem;
      }
    }
    .search-wrapper {
      display: flex;
      flex: 1;
      gap: 0.75rem;
      .bar {
        flex: 1;
        position: relative;
        span {
          position: absolute;
          z-index: 1;
          left: 1.56rem;
          top: 50%;
          transform: translateY(-50%);
          svg {
            display: block;
          }
        }    
        input {
          font-size: 1rem;
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
          @media ${DEVICE.maxxs} {
            min-width: 15rem;
          }
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
