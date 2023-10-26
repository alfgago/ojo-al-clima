import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const GridNewStyle = styled.section<{ background: string, asset: string, reverse: number }>`
  .grid-news-container {
    background: ${props => props.background === 'light' ? COLORS.white : COLORS.black};
    padding: 3.25rem 0 ;
    @media ${DEVICE.maxmd} {
      padding: 3.25rem 2rem;
    }
    .wrapper {
      max-width: 84.30856rem;
      width: 100%;
      margin: auto;
      position: relative;
      z-index: 100;
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
        .btn-show-more-top-wrapper {
          a {
            color: ${props => props.background === 'light' ? COLORS.black : COLORS.white};
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.62rem;
            svg {
              display: block;
            }
          }
        }
        &.highlight {
          h2 {
            margin-bottom: -3rem;
            @media ${DEVICE.xs} {
              left: ${props => props.reverse ? 'calc(65% + 3.25rem)' : '0'}; 
            }
            @media ${DEVICE.maxxs} {
              margin-bottom: 2rem;
            }
          }
        }
        &.normal {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3.19rem;
        }
      }
      .articles {
        &.highlight {
          display: flex;
          flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
          gap: 3.25rem;
          @media ${DEVICE.maxxs} {
            flex-direction: column-reverse;
            gap: 0rem;
          }
          .featured-wrapper {
            width: 65%;
            @media ${DEVICE.maxxs} {
              width: 100%;
            }
          }
          .lateral-wrapper {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1.94rem;
            padding-top: 5rem;
            @media ${DEVICE.maxxs} {
              padding-top: 2rem;
            }
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
          @media ${DEVICE.xs} {
            display: flex;
            gap: 3.25rem;
          }
          .date {
            display: none;
          }
          &.small {
            @media ${DEVICE.xs} {
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
      .btn-show-more-bottom-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3.12rem 0;
        a {
          color: ${props => props.background === 'light' ? COLORS.black : COLORS.white};
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          text-decoration: none;
          display: flex;
          width: fit-content;
          padding: 0.625rem 2.25rem;
          justify-content: center;
          align-items: center;
          border-radius: 3.125rem;
          border: 1px solid #FFF;
          backdrop-filter: blur(3px);
        }
      }
    }
  }
`
