import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

const generateDelay = (numOfItems:any) => {
  let styles = '';
  for (let i = 0; i < numOfItems; i++) {
    styles += `
      &:nth-child(${i + 1}) {
          transition-delay: ${0.05 + (numOfItems - 1 - i) * 0.05}s;
      }
    `;
  }
  return styles;
}

export const HeaderStyle = styled.header`
  position: relative;
  z-index: 20;
  .header-container { 
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: auto;
    height: 5rem;
    .site-logo {
      padding-left: 5rem;
      svg {
        max-width: 8rem;
        display: block;
        rect:nth-child(2) {
          filter: brightness(0.6);
        }
      }
      &.homepage {
        @media ${DEVICE.md} {
          svg {
            rect:nth-child(2) {
              filter: brightness(1);
            }
          }
        }
      }
    }
    .content {
      max-width: 60rem;
      width: 100%;
      display: flex;
      .menu {
        display: flex;
        align-items: center;
        .menu-wrapper {
          display: flex;
          gap: 4rem;
          @media ${DEVICE.md} {
            .item {
              transition: all 0.4s ease;
              ${generateDelay(8)}
              &:hover {
                .parent {
                  span {
                    transform: rotate(-180deg);    
                  }
                }
              }
            }
            &.true {
              .item {
                transform: translateY(0.5rem);
                opacity: 0;
                pointer-events: none;
              }
            }
          }
          .item {
            transition: all 0.4s ease;
            position: relative;
            opacity: 1;
            .parent {
              padding: 1rem 0;
              display: flex;
              align-items: center;
              gap: 0.39rem;
              span {
                transition: all 0.4s ease;
              }
            }
            a {
              display: block;
              text-decoration: none;
              color: ${COLORS.black};
              span {
                font-size: 1rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              }
            }
            .childrens {
              position: absolute;
              width: max-content;
              min-width: 13rem;
              display: flex;
              flex-direction: column;
              z-index: 100;
              border-radius: 0.3125rem;
              background: #FFF;
              box-shadow: 0px 4px 43px 0px rgba(0, 0, 0, 0.09);
              text-align: center;
              a {
                padding: 1.13rem 1rem;
                width: 100%;
              }
            }

            @media ${DEVICE.md} {
              .childrens {
                padding-top: 0.375rem;
                pointer-events: none;
                visibility: hidden;
                opacity: 0;
                transition: all cubic-bezier(0.22, 1.38, 0.86, 1.09) 0.8s;
                &:before {
                  position: absolute;
                  content: "";
                  top: 0;
                  height: 0.375rem;
                  width: 100%;
                  background: ${GRADIENTS.red};  
                  border-top-right-radius: 0.3125rem;
                  border-top-left-radius: 0.3125rem;
                } 
              }
              &:hover .childrens {
                pointer-events: all;
                visibility: visible;
                opacity: 1;
              }
            }

          }
        }
      }
      .search {
        display: flex;
        align-items: center;
        padding: 0 6rem 0 2rem;
      }

      &.homepage {
        @media ${DEVICE.md} {
          .parent {
            a {
              color: ${COLORS.white} !important;
            }
            svg {
              path { 
                stroke: ${COLORS.white} !important;
              }
            }
          }
          .search-header-wrapper {
            input {
              border-radius: 3.125rem;
              border: 0.5px solid #FFF;
              background: rgba(255, 255, 255, 0.55);
              backdrop-filter: blur(2.5px);
            }
            .text {
              color: ${COLORS.white};
            }
            .search-icon {
              svg {
                path {
                  fill: ${COLORS.white} !important;
                }
              }
            }
            .close-icon {
              svg {
                path {
                  stroke: ${COLORS.white} !important;
                }
              }
            }
          }
        }
      }

    }
    .learn-controls {
      width: 23.2rem;
      background: ${GRADIENTS.red};
      &.homepage {
        @media ${DEVICE.md} {
          .control-wrapper {
            pointer-events: all;
          }
        }
      }
    }
  }
`
