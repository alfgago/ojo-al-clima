import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const GridNewStyle = styled.section<{ background: string, asset: string, reverse: number }>`
  .grid-news-container {
    background: ${props => props.background === 'light' ? COLORS.white : COLORS.black};
    padding: 3.25rem 0 ;
    .wrapper {
      max-width: 84.30856rem;
      width: 100%;
      margin: auto;

      .title {
        h2 {
          color: ${props => props.background === 'light' ? COLORS.black : COLORS.white};
          font-size: 3rem;
          font-style: normal;
          font-weight: 900;
          line-height: 1;
          position: relative;
          padding-left: 2rem;
          &:before {
            position: absolute;
            content: "";
            width: 0.6875rem;
            height: 100%;
            border-radius: 5rem;
            background: ${props => props.asset};  
            left: 0;
          }
        }
        &.highlight {
          h2 {
            margin-bottom: -3rem;
            left: ${props => props.reverse ? 'calc(65% + 3.25rem)' : '0'}; 
          }
        }
        &.normal {
          margin-bottom: 3.19rem;
        }
      }
      .articles {
        &.highlight {
          display: flex;
          flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
          gap: 3.25rem;
          .featured-wrapper {
            width: 65%;
          }
          .lateral-wrapper {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1.94rem;
            padding-top: 5rem;
            .title {
              a {
                color: ${props => props.background === 'light' ? COLORS.black : COLORS.white};
              }
            }
            .date {
              display: none;
            }
          }
        }
        &.normal {
          display: flex;
          gap: 3.25rem;
          .date {
            display: none;
          }
          &.small {
            .thumbnail {
              img {
                height: 14.125rem
              }
            }
            .content {
              min-height: 11.3125rem;
              .title {
                a {
                  font-size: 0.9375rem;
                }
              }
            }
          }
        }
      }
    }
  }
`
