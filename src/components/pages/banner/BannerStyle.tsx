import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const BannerStyles = styled.section`
 .banner-wrapper {
    height: 90vh;
  .content {
    background-size: calc(100% - 23.55rem) 100% !important;
    background-repeat: no-repeat!important;
    background-color: ${COLORS.red} !important;
    height: 100%;
    display: flex;
    align-items: flex-end;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 80%;
      bottom: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(7, 10, 17, 0.80) 100%);
    }
    .data-container {
      position: relative;
      max-width: 84.5rem;
      width: 100%; 
      z-index: 1;
      .data-wrapper {
        max-width: 76.5625rem;
        padding: 5rem 5.88rem;
        h1 {
          color: ${COLORS.white};
        }
        p {
          max-width: 51rem;
          color: ${COLORS.white};
          font-size: 1.25rem;
          font-weight: 400;
          line-height: 140%; /* 1.75rem */
        }
        a {
          border-radius: 3.125rem;
          background: ${COLORS.white};
          display: flex;
          width: 100%;
          max-width: 12.5rem;
          padding: 1rem 1.25rem;
          justify-content: center;
          align-items: center;
          gap: 2.1875rem;
          color: ${COLORS.black};
          text-align: center;
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 800;
          line-height: 1.2rem;
          text-decoration: none;
        }
      }
    }
  }
 }
`
