import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const PreviewStyle = styled.div<{color: string}>`
  width: 100%;
  .article-card {
    .thumbnail {
      img {
        width: 100%;
        min-height: 9rem;
        height: 100%;
        object-fit: cover;
        border-radius: 0.3125rem;
      }
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
      h4 {
        margin: 0;
        padding: 0;
        a {
          display: block;
          margin: 0;
          padding: 0;
          color: ${COLORS.black};
          font-size: 1.125rem;
          font-style: normal;
          font-weight: 500;
          line-height: 118%; /* 1.3275rem */
          text-decoration: none;
        }
      }
      span {
        color: #858585;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }

    &.lateral {
      display: flex;
      gap: 0.87rem;
      .thumbnail {
        width: 35.5%;
      }
    }
    &.vertical {
      .thumbnail {
        position: relative;
        img {
          height: 21.5rem;
        }
        &:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 0.5rem;
          background: ${props => COLORS[props.color]};
          bottom: 0;
          z-index: 1;
        }
      }
      .content {
        padding: 1.37rem 1.40rem;
        border-radius: 0rem 0rem 0.3125rem 0.3125rem;
        background: #FFF;
        box-shadow: 0px 4px 43px 0px rgba(0, 0, 0, 0.09);
        min-height: 13.75rem;
        .meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .title {
          a {
            color: ${COLORS.black};
            font-size: 1.5625rem;
            font-style: normal;
            font-weight: 500;
            line-height: 118%; /* 1.84375rem */
          }
        }
      }
    }
  }
`
