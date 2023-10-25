import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const PreviewStyle = styled.div<{color: string}>`
  width: 100%;
  .article-card {
    transition: all 0.3s ease;
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
      transition: all 0.6s ease;
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
          transition: all 0.2s ease;
        }
      }
      span {
        color: #858585;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        transition: all 0.3s ease;
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
          transition: background 0.3s ease;
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
      &:hover {
        .thumbnail {
          &:before {
            background: ${COLORS.white};
          }
        }
        .content {
          background: ${props => GRADIENTS[props.color]};
          span, a {
            color: ${COLORS.white} !important;
          }
          .article-category {
            a {
              background: ${COLORS.white};
              -webkit-background-clip: text;
              &:before {
                background: ${COLORS.white};
              }
            }
          }
        }
      }
    }
  }
`
