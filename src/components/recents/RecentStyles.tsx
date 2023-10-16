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
  }
`
