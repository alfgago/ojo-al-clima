import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const SearchHeaderStyle = styled.div`
 .search-header-wrapper {
  display: flex;
  position: relative;

  .bar { 
    position: absolute;
    right: calc(100% + 2.75rem);
    width: 15rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    opacity: 0;
    pointer-events: none;
    transition: all 0.8s ease;
    transition-delay: 0.4s;
    @media ${DEVICE.maxmd} {
      right: calc(100% + 1.75rem);
    }
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

    span {
      position: absolute;
      z-index: 1;
      left: 1.56rem;
      top: 50%;
      transform: translateY(-50%);
      svg {
        display: block;
        path {
          fill: #858585;
        }
      }
    }

    &.true {
      width: 45rem;
      pointer-events: all;
      opacity: 1;
      @media ${DEVICE.maxmd} {
        width: calc(100vw - 30rem);
      }
      @media ${DEVICE.maxxs} {
        width: calc(100vw - 15rem);
      }
    }

  }
  .btn {
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    align-items: center;
    @media ${DEVICE.maxmd} {
      transform: translateX(2rem);
    }
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
      svg {
        display: block;
        transition: all 0.6s ease;
        @media ${DEVICE.maxmd} {
          width: 2rem;
          height: 2rem;
        }
        path {
          transition: all 0.4s ease;
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
        opacity: 0;
        transition: all 0.6s ease;
      }
    }
    .text {
      transition: all 0.3s ease;
      @media ${DEVICE.maxmd} {
        position: absolute;
        z-index: 1;
        opacity: 0;
      }
    }
    .close-icon {
      transition: all 0.5s ease;
      svg {
        transition: all 0.5s ease;
        @media ${DEVICE.maxmd} {
          width: 4rem;
          height: 4rem;
          path {
            stroke-width: 1;
          }
        }      
      }
    }

    &.false {
      .search-icon {
        transform: translateX(1rem);
      }
      .close-icon {
        opacity: 0;
        transform: translateX(-4rem);
        svg {
          transform: rotate(210deg);
        }
      }
    }
    &.true {
      .search-icon { 
        transform: translateX(-2rem);
        @media ${DEVICE.maxmd} {
          transform: translateX(-3rem);
        }
        svg {
          path {
            fill: ${COLORS.white};
          }
        }
        &:before { 
          opacity: 1;
        }
      }
      .text {
        opacity: 0;
        transform: translateX(-1rem);
      }
      .close-icon {
        transform: translateX(-3rem);
      }
    }
  }
 }
`
