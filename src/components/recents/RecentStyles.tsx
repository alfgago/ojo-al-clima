import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const RecentStyle = styled.div`
  max-width: 26rem;  
  .recents-news-wrapper{
   h3 {
    color: #000;
    font-size: 3rem;
    font-style: normal;
    font-weight: 900;
    line-height: 1;
    position: relative;
    padding-left: 1.5rem;
    &:before {
      position: absolute;
      content: "";
      width: 0.6875rem;
      height: 100%;
      border-radius: 5rem;
      background: ${COLORS.red};
      left: 0;
    }
   }
   .articles-container {
      display: flex;
      flex-direction: column;
      gap: 1.94rem;
      margin-top: 1.94rem;
      .article-card {
        .date {
          display: none;
        }
      }
   }
   .search-recents-block {
    border-radius: 0.625rem;
    background: ${COLORS.white};
    margin-top: 3.12rem;
    padding: 1.75rem 1.75rem 3.12rem;
    box-shadow: 0px 4px 43px 0px rgba(0, 0, 0, 0.09);
    position: relative;
    &:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 0.5rem;
      background: ${COLORS.blue};
      top: 0;
      left: 0;
      border-radius: 0.625rem 0.625rem 0 0;
    }
    h4 {
      color: #000;
      font-size: 2rem;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
    .search-general {
      margin: 1.75rem 0 0;
      .bar-container {
        flex-direction: column-reverse;
        select,
        input {
          padding: 0.75rem 1.62rem;
          height: 2.9375rem;
        }
        .bar {
          span {
            display: none;
          }
        }
        .btn {
          position: relative;
          z-index: 1;
        }
      }
    }
   }
  }
`
