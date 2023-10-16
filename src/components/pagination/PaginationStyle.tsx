import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const PaginationStyle = styled.section`
  .pagination-container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.25rem;
    .arrow {
      min-width: 10rem;
      display: flex;
      a {
        display: flex;
        align-items: center;
        gap: 0.62rem;
        text-decoration: none;
        span {
          color: ${COLORS.black};
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 500;
          line-height: 140%; /* 1.75rem */
          transition: color 0.2s ease-in-out;
          &:hover {
            color: ${COLORS.blue};
          }
        }
      }
      &.prev {
        justify-content: flex-end;
      }
      &.next {
        justify-content: flex-start;
      }
    }

    .numbers {
      display: flex;
      gap: 1rem;
      a {
        text-decoration: none;
      }
      span,
      .page-number {
        color: ${COLORS.black};
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        transition: color 0.2s ease-in-out;
        &:hover {
          color: ${COLORS.blue};
        }
      }
      .active {
        color: ${COLORS.blue};
      }
    }

  }
`
