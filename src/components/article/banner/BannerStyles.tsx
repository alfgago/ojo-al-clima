import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const BannerStyles = styled.section`
  .banner-container {
    position: relative;
    margin-bottom: 3rem;
    .thumbnail-wrapper {
      img {
        width: 100%;
        height: 75vh;
        object-fit: cover;
      }
    }
    .content-wrapper {
      position: absolute;
      bottom: 5.69rem;
      width: 85rem;
      left: 50%;
      transform: translateX(-50%);
      .data {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        width: 71rem;
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
          }
        }
        .title {
          h1 {
            color: ${COLORS.white};
            font-size: 3.375rem;
            font-style: normal;
            font-weight: 800;
            line-height: 118%; 
          }
        }
        .author {
          color: ${COLORS.white};
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 800;
          line-height: normal;
        }
      }
    }
  }
`
