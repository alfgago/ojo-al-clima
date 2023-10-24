import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const FeaturedStyle = styled.div`
  height: 100%;
  .featured-card {
    height: 100%;
    position: relative;
    .thumbnail-wrapper {
      height: 100%;
      position: relative;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.3125rem;
      }
      &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 60%;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%);
        border-radius: 0.3125rem;
        bottom: 0;
        left: 0;
      }
    }
    .content-wrapper {
      position: absolute;
      bottom: 1.87rem;
      width: 100%;
      padding: 0 2.5rem;
      h3 {
        padding: 0.75rem 0;
        a {
          color: ${COLORS.white};
          font-size: 2rem;
          font-style: normal;
          font-weight: 500;
          line-height: 118%; /* 2.36rem */
          text-decoration: none;
        }
      }
      .author {
        span {
          color: ${COLORS.white};
          font-size: 1rem;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }
      .excerpt {
        p {
          color: ${COLORS.white};
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
`
