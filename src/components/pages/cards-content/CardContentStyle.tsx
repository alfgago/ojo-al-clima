import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const CardsContentStyle = styled.section<{background: string}>`
  .cards-content-container {
    /*background: url(${(props) => props.background});*/ 
    background-size: 100% 115% !important;
    background-repeat: no-repeat!important;
    position: relative;
    margin: 3.25rem 0 0;
    @media ${DEVICE.maxmd} {
      background-size: cover !important;
    }
    &:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 33%;
      bottom: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #050507 95.56%);
    }
    #grad-container {
      z-index:-1;
    }
    .colors-layer {
      /*background: url(/layers/colors.webp);*/ 
      background-repeat: no-repeat !important;
      background-size: 100% 90% !important;
      position: relative;
      opacity: 80%;
      &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 60%;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #050507 82.56%);
      }
      &:after {
        /*content: '';*/ 
        height: 65%;
        width: 100%;
        background: linear-gradient(1deg, rgba(255, 255, 255, 0.00) 0%, #8CCBF7 50.6%);
        position: absolute;
        top: 0;
        mix-blend-mode: color-burn;
      }
      .wrapper {
        padding: 4.25rem 0 6.25rem;
        max-width: 85rem;
        width: 100%;
        margin: 0 auto;
        position: relative;
        z-index: 1;
        @media ${DEVICE.maxmd} {
          padding: 4.25rem 2rem 6.25rem;
        }
        .content {
          h2 {
            color: ${COLORS.white};
            font-size: 4rem;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
            text-align: center;
            @media ${DEVICE.maxxs} {
              font-size: 2.5rem;
            }
          }
          .description {
            color: ${COLORS.white};
            text-align: center;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin: 2.9rem 0rem 3.12rem;
            @media ${DEVICE.maxxs} {
              margin: 1rem 0rem 3.12rem;
              font-size: 1.3rem;
            }
            p,a,li,strong {
              color: ${COLORS.white};
              text-align: center;
              font-weight: 800;
            }
          }
          .btn {
            a {
              display: flex;
              margin: 0 auto;
              color: ${COLORS.white};
              font-size: 1.25rem;
              font-style: normal;
              font-weight: 800;
              line-height: normal;
              padding: 0.62rem 1.25rem;
              text-decoration: none;
              min-width: 15rem;
              justify-content: center;
              width: fit-content;
              border-radius: 3.125rem;
              border: 1px solid #FFF;
              backdrop-filter: blur(3px);
              @media ${DEVICE.maxxs} {
                padding: 0.62rem 2rem;
                font-size: 1.5rem;
                font-weight: 500;
                border-radius: 3.125rem;
                border: 1px solid #FFF;
                background: rgba(255, 255, 255, 0.20);
                backdrop-filter: blur(3px);
              }
            }
          }
        }
        .cards {
          padding-top: 6.25rem;
          display: flex;
          justify-content: space-between;
          @media ${DEVICE.maxxs} {
            justify-content: center;
            flex-wrap: wrap;
            gap: 3rem;
            align-items: center;
          }
          .card-container {
            max-width: 20.3125rem;
            border-radius: 0.625rem;
            background: rgba(255, 255, 255, 0.20);
            backdrop-filter: blur(6px);
            padding: 1.87rem 2.3rem;
            @media ${DEVICE.maxxs} {
              flex: 1 20rem;
            }
            h4 {
              color: ${COLORS.white};
              font-size: 6.25rem;
              font-style: normal;
              font-weight: 350;
              line-height: 1;
              span {
                font-size: 3.75rem;
              }
            }
            .card-description {
              color: ${COLORS.white};
              margin: 0;
              font-size: 1.5rem;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              min-height: 1rem;
            }
          }
        }
      }
    }
  }
`
