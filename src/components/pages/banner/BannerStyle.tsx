import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE, GRADIENTS_VERTICALS } from "@/styles/variables"

export const BannerStyles = styled.section`
 .banner-wrapper {
    height: 100vh;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    @media ${DEVICE.maxmd} {
      height: auto;
    }
    @media ${DEVICE.md} {
      margin-top: -5rem;
    }
    .content {
      background-size: cover !important;
      background-repeat: no-repeat!important;
      background-color: ${COLORS.red} !important;
      height: 100%;
      display: flex;
      align-items: flex-end;
      position: relative;
      flex: 1;
      @media ${DEVICE.maxmd} {
        height: 50rem;
      }
      @media ${DEVICE.maxxs} {
        height: 30rem;
      }
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
          @media ${DEVICE.maxxs} {
            padding: 2rem 2rem;
          }
          h1 {
            color: ${COLORS.white};
            font-weight: 500;
            line-height: 110%;
            @media ${DEVICE.maxxs} {
              font-size: 2.5rem;
            }
          }
          p {
            max-width: 51rem;
            color: ${COLORS.white};
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 140%; /* 1.75rem */
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            @media ${DEVICE.maxxs} {
              display: none;
            }
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
            @media ${DEVICE.maxxs} {
              margin-top: 1rem;
              font-size: 1.5rem;
            }
          }
        }
      }
    } 
    .learn-colors{
      width: 23.2rem;
      display: flex;
      height: calc(100% - 5rem);
      @media ${DEVICE.maxmd} {
        width: 100%;
        opacity: 0;
        pointer-events: none;
      }
      @media ${DEVICE.maxxs} {
        height: 28rem;
        opacity: 1;
        pointer-events: all;
      }
      div {
        flex: 1;
        &.red {
          background: ${GRADIENTS_VERTICALS.red};
        }
        &.purple {
          background: ${GRADIENTS_VERTICALS.purple};
        }
        &.blue {
          background: ${GRADIENTS_VERTICALS.blue};
        }
        &.yellow {
          background: ${GRADIENTS_VERTICALS.yellow};
        }
        a {
          display: flex;
          height: 100%;
          width: 100%;
          align-items: flex-start;
          margin-top: -1rem;
          justify-content: center;
          text-decoration: none;
          position: relative;
          @media ${DEVICE.maxxs} {
            margin-top: 1rem;
          }
          span {
            color: #fff;
            font-size: 2rem;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            text-transform: uppercase;
            transform: rotate(90deg);
            display: block;
            width: 0rem;
            height: 2.8rem;
            @media ${DEVICE.maxxs} {
              font-size: 2.5rem;
            }
          }
          .plus-icon {
            position: absolute;
            bottom: 3.5rem;
            @media ${DEVICE.xs} {
              display: none;
            }
          }
        }
      }
    }
  }
`
