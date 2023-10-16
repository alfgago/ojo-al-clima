import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const FooterStyle = styled.footer`
  .links-container {
    background: ${COLORS.black};
    .links-wrapper {
      max-width: 85rem;
      width: 100%;
      margin: 0 auto;
      padding: 7.19rem 0 6.19rem;
      display: flex;
      gap: 4.85rem;
      .logo {
        display: flex;
        flex-direction: column;
        gap: 1.55rem;
        width: 21%;
        img {
          height: auto;
          width: 13rem;
          margin-top: -1rem;
        }
        span {
          color: ${COLORS.white};
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
      .menu {
        display: flex;
        gap: 4.44rem;
        flex: 1;
        .item {
          display: flex;
          flex-direction: column;
          gap: 0.94rem;
          span {
            color: ${COLORS.white};
            font-size: 1.375rem;
            font-style: normal;
            font-weight: 800;
            line-height: 118%; /* 1.6225rem */
            text-transform: uppercase;
          }
          .childrens {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            a {
              text-decoration: none;
            }
            span {
              font-size: 1rem;
              font-weight: 350;
              line-height: 118%; /* 1.18rem */
              text-transform: capitalize;
            }
          }
        }
      }
      .logo-u {
        width: 11%;
        display: flex;
        flex-direction: column;
        gap: 3.75rem;
        img {
          width: 100%;
          height: auto;

        }
      }
    }

  }
  .credits-container {
    background: #0F141E;
    height: 5.125rem; 
    .credits-wrapper {
      max-width: 85rem;
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      
      a,
      span {
        color: #B9B9B9;
        font-size: 1.25rem;
        line-height: 118%; /* 1.475rem */
      }

      span {
        font-weight: 350;
      }
      a {
        padding-left: 0.5rem;
        font-weight: 800;
        text-decoration: none;
      }
    }
  }
`
