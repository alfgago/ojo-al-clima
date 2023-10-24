import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const QuienesSomosStyle = styled.section`
  background: ${COLORS.black};
  color: ${COLORS.white} !important;
  .banner {
    width: 100%;
    height: 40rem;
    background: url('/images/banner-quienes-somos.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    margin-bottom: -15rem;
    @media ${DEVICE.maxmd} {
      height: 50rem;
      background-position: 70% 100%;
      margin-bottom: -30rem;
    }
  }
  .wordpress-content {
    width: 84.4375rem;
    margin: auto;
    padding: 1rem 16rem 1rem 0;
    @media ${DEVICE.maxmd} {
      width: 100%;
      padding: 0 2rem 5rem;
    }
    h1 {
      @media ${DEVICE.md} {
        font-size: 4rem;
      }
      margin-bottom: 3rem;
    }
    h2 {
      font-size: 3rem;
    }
 
    h1, h2, h3 {
      position: relative;
      padding-left: 2rem;
      line-height: 1;
      &:before {
        position: absolute;
        content: "";
        width: 0.6875rem;
        height: 100%;
        border-radius: 5rem;
        background: #6967F1;  
        left: 0;
      }
    }

    a, p, li {
      font-size: 1.5rem;
      color: ${COLORS.white};
    }

    ul {
      @media ${DEVICE.maxxs} {
        padding: 1rem 1.5rem;
      }
      li {
        &::marker { 
          color: ${COLORS.blue};
        }
        padding: 1.5rem 0;
        @media ${DEVICE.maxxs} {
          padding: 1rem 0;
        }
      }
    }

  }

`
