import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const BannerStyles = styled.section`
  .banner-container {
    position: relative;
    margin-bottom: 3rem;
    .thumbnail-wrapper {
      position: relative;
      &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 50%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(7, 10, 17, 0.80) 100%);
        bottom: 0;
      }
      img {
        display: block;
        width: 100%;
        height: 85vh;
        object-fit: cover;
        @media ${DEVICE.maxxs} {
          height: 32rem
        }
      }
    }
    .content-wrapper {
      position: absolute;
      bottom: 5.69rem;
      width: 85rem;
      left: 50%;
      transform: translateX(-50%);
      @media ${DEVICE.maxmd} {
        width: 100%;
        padding: 0 2rem;
        bottom: 3rem;
      }
      .data {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        width: 71rem;
        @media ${DEVICE.maxmd} {
          width: 100%;
        }
        .meta {
          display: flex;
          gap: 1.69rem;
          .category {
            background: ${GRADIENTS.green};
            color: ${COLORS.white};
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 800;
            line-height: normal;
            text-transform: uppercase;
            display: flex;
            padding: 0.25rem 1.25rem;
            justify-content: center;
            align-items: center;
            width: fit-content;
            border-radius: 1.875rem;
          }
          .date {
            color: ${COLORS.white};
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 800;
            line-height: normal;
            @media ${DEVICE.maxxs} {
              font-size: 1.15rem;
              font-weight: 500;
            }
          }
        }
        .title {
          h1 {
            color: ${COLORS.white};
            font-size: 3.375rem;
            font-style: normal;
            font-weight: 500;
            line-height: 118%; 
            @media ${DEVICE.maxxs} {
              font-size: 1.5rem;
              font-weight: 600;
            }
          }
        }
        .author {
          color: ${COLORS.white};
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 800;
          line-height: normal;
          @media ${DEVICE.maxxs} {
            font-size: 1.15rem;
            font-weight: 500;
          }
        }
      }
    }
  }
`
