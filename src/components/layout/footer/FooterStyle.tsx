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
      @media ${DEVICE.maxmd} {
        flex-direction: column;
        padding: 5rem 2rem 5rem;
        max-width: 100%;
      }
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
        @media ${DEVICE.maxmd} {
          width: 100%;
          span {
            font-size: 1.2rem;
          }
        }
      }
      .menu {
        display: flex;
        gap: 4.44rem;
        flex: 1;
        @media ${DEVICE.maxmd} {
          gap: 2.44rem;
          flex-wrap: wrap;
        }
        .item {
          display: flex;
          flex-direction: column;
          gap: 0.94rem;
          @media ${DEVICE.maxmd} {
            flex: 1 9rem;
            &:nth-child(1){
              order: 1
            }
            &:nth-child(2){
              order: 3
            }
            &:nth-child(3){
              order: 2
            }
            &:nth-child(4){
              order: 4;
            }
          }
          @media (max-width: 420px) {
            &:nth-child(4){
              margin-top: -6rem;
            }
          }
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
        @media ${DEVICE.maxmd} {
          width: 35%;
          flex-direction: row;
        }
        @media (max-width: 420px) {
          width: 100%;
          display: grid;
          grid-gap: 3.25rem;
          margin: -10rem 0 -0.75rem;
          justify-items: center;
          align-items: center;
          justify-content: end;
          grid-auto-columns: 47%;
          padding-right: 1rem;
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
      @media ${DEVICE.maxmd} {
        justify-content: center;
      }
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
