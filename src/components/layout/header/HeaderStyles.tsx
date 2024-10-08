import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

const generateDelay = (numOfItems: any) => {
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
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  .header-container { 
    background: ${COLORS.white};
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: auto;
    height: 5rem;
    transition: all 0.6s ease;
    box-shadow: 0px 4px 43px 0px rgba(0, 0, 0, 0.09);
    &.homepage {
      box-shadow: 0px 4px 43px 0px rgba(0, 0, 0, 0);
      background: transparent;
    }
    @media ${DEVICE.md} {
      .hide-on-desktop {
        display: none !important;
      }
    }
    @media ${DEVICE.maxmd} {
      .hide-on-mobile {
        display: none !important;
      }
    }
    @media ${DEVICE.maxmd} {
      height: 6.5rem;
    }
    .lateral-menu {
      position: absolute;
      top: 100%;
      border-radius: 0rem 0rem 0.9375rem 0rem;
      background: #FFF;
      padding: 1.88rem 2.91rem;
      transform: translate(-100%, 0px);
      transition: transform .6s cubic-bezier(0.56, 0.1, 0.34, 0.91);
      box-shadow: 37px 43px 22px -30px rgba(0, 0, 0, 0.02);
      &.active {
        transform: translate(0%, 0px);
      }
      .parent {
        a {
          color: ${COLORS.purple};
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 500; 
          line-height: normal;
          text-decoration: none;
          padding: 1rem 0;
          display: block;
        }
      } 
      .share { 
        path {
          fill: rgb(63, 68, 143);
        }
      }
    }
    .site-logo {
      padding-left: 3rem;
      display: flex;
      align-items: center;
      @media ${DEVICE.md} {
        gap: 2rem;
      }
      @media ${DEVICE.maxmd} {
        padding-left: 2rem;
      }
      .logo {
        transition: all 0.6s ease;
        svg {
          max-width: 8rem;
          display: block;
          height: auto;
          rect:nth-child(2) {
            transition: all 0.4s ease;
            filter: brightness(0.6);
          }
        }
      }
      &.homepage {
        @media ${DEVICE.md} {
          .hamburger-menu {
            transform: translateX(2rem);
            opacity: 0;
            pointer-events: none;
          }
          .logo {
            scale: 1.2;
            transform: translate(-3rem, 0.3rem);
            svg {
              rect:nth-child(2) {
                filter: brightness(0) invert(1);
              }
            }
          }
        }
      }
    }
    .content {
      width: 100%;
      display: flex;
      @media ${DEVICE.md} {
        max-width: 60rem;
      }
      @media ${DEVICE.maxmd} {
        position: relative;
        z-index: 100;
      }
      .menu {
        display: flex;
        align-items: center;
        @media ${DEVICE.maxmd} {
          position: fixed;
          top: calc(0rem + 6.5rem);
          left: 0;
          width: 100vw;
          height: calc(100vh - 5rem);
          align-items: flex-start;
          background: #fff;
          padding: 2rem;
          transform: translate(-100%, 0px);
          transition: transform .6s cubic-bezier(0.56, 0.1, 0.34, 0.91);
          &.active {
            transform: translate(0%, 0px);
          }
        }
        .menu-wrapper {
          display: flex;
          gap: 4rem;
          @media ${DEVICE.maxmd} {
            height: 100%;
            width: 100%;
            flex-wrap: wrap;
            overflow: auto;
            gap: 0;
            align-content: flex-start;
          }
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
            @media ${DEVICE.maxmd} {
              width: 100%;
              border-bottom: solid #E2E2E2 1px;
              &:last-child {
                border-bottom: none;
              }
            }
            @media ${DEVICE.maxmd} {
              &.hide-on-desktop {
                .parent {
                  a {
                    color: ${COLORS.black} !important;
                  }
                }
              }
              &.learn {
                .childrens {
                  border-radius: 0;
                  width: 100%; 
                  a {
                    width: 100%;
                    display: block;
                    text-transform: uppercase;
                    padding: 1.5rem 1.5rem;
                    color: #fff;
                    position: relative;
 
                    &:nth-child(1) {
                      background: ${GRADIENTS.red};
                    }
                    &:nth-child(2) {
                      background: ${GRADIENTS.purple};
                    }
                    &:nth-child(3) {
                      background: ${GRADIENTS.blue};
                    }
                    &:nth-child(4) {
                      background: ${GRADIENTS.yellow};
                    }
                    &:before {
                      position: absolute;
                      content: "➕";
                      filter: brightness(0) invert(1);
                      right: 2rem;
                      top: 50%;
                      transform: translateY(-50%);
                    }
                  }
                }
              }
            }
            .parent {
              padding: 1rem 0;
              display: flex;
              align-items: center;
              gap: 0.39rem;
              @media ${DEVICE.maxmd} {
                justify-content: space-between;
                padding-right: 2.5rem;
                svg {
                  width: 2rem;
                  height: 2rem;
                }
                a {
                  text-transform: uppercase;
                  font-size: 2.5rem;
                  font-weight: 600;
                }
                &.red {
                  a {
                    color: ${COLORS.red};
                  }
                } 
                &.blue {
                  a {
                    color: ${COLORS.blue};
                  }
                }
                &.yellow {
                  a {
                    color: ${COLORS.yellow};
                  }
                }
                &.purple {
                  a {
                    color: ${COLORS.purple};
                  }
                }
                &.green {
                  a {
                    color: ${COLORS.green};
                  }
                }
                &.gray {
                  a {
                    color: ${COLORS.gray};
                  }
                }
                &.active {
                  span {
                    transform: rotate(-180deg);
                  }
                }
              }
              @media ${DEVICE.maxxs} {
                a {
                  font-size: 1.5rem;
                }
                svg {
                  width: 1.5rem;
                  height: 1.5rem;
                }
              }
              span {
                transition: all 0.4s ease;
              }
              svg {
                path { 
                  transition: all 0.4s ease;
                }
              }
              
            }
            a {
              display: block;
              text-decoration: none;
              color: ${COLORS.black};
              transition: all 0.4s ease;
              span {
                font-size: 1rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              }
            }
            .childrens {
              width: max-content;
              min-width: 13rem;
              display: flex;
              flex-direction: column;
              z-index: 100;
              border-radius: 0.3125rem;
              background: #FFF;
              text-align: center;
              @media ${DEVICE.maxmd} {
                transition: all ease 1s;
                height: 0;
                overflow: hidden;
              }
              a {
                padding: 1.13rem 1rem;
                width: 100%;
                @media ${DEVICE.maxmd} {
                  text-align: left;
                  padding: 1.13rem 0rem;
                  span {
                    font-size: 1.8rem;
                  }
                }
                @media ${DEVICE.maxxs} {
                  padding: 0.8rem 0rem;
                  span {
                    font-size: 1.2rem;
                  }
                }
              }
              @media ${DEVICE.md} {
                box-shadow: 0px 4px 43px 0px rgba(0, 0, 0, 0.09);
                position: absolute;
              }
            }

            @media ${DEVICE.md} {
              .childrens {
                padding-top: 0.375rem;
                pointer-events: none;
                visibility: hidden;
                opacity: 0;
                transition: all cubic-bezier(0.22, 1.38, 0.86, 1.09) 0.8s;
                height: auto !important;
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
                &.red {
                  &:before {
                    background: ${GRADIENTS.red};
                  }
                } 
                &.blue {
                  &:before {
                    background: ${GRADIENTS.blue};
                  }
                }
                &.yellow {
                  &:before {
                    background: ${GRADIENTS.yellow};
                  }
                }
                &.purple {
                  &:before {
                    background: ${GRADIENTS.purple};
                  }
                }
                &.green {
                  &:before {
                    background: ${GRADIENTS.green};
                  } 
                }
                &.gray {
                  &:before {
                    background: ${GRADIENTS.gray};
                  }
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
        @media ${DEVICE.maxmd} {
          padding: 0 2rem 0 0rem;
          flex: 1;
          justify-content: flex-end;
        }
      }

      &.homepage {
        @media ${DEVICE.md} {
          .parent {
            a {
              color: ${COLORS.white} !important;
              text-shadow: 1px 2px 4px #000;
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
      @media ${DEVICE.maxmd} {
        width: 0;
      }
    }
    .hamburger-menu{
      width: 2rem;
      height: 1.6rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      position: relative;
      z-index: 10;
      transition: all 0.6s ease;
      @media ${DEVICE.maxmd} {
        width: 2.8rem;
        height: 2rem;
        transform: translateY(-0.2rem);
      }
      span {
        height: 0.14rem;
        @media ${DEVICE.maxmd} {
          height: 0.2rem;
          background-color: #000;
        }
        background-color: #3F448F;
        opacity: 1;
        transform: translateY(0) rotate(0);
        transition: all .3s;
        border-radius: 0.2rem;
      }
      &.active {
        span {
          &:nth-child(1) {
            transform: translateY(0.9rem) rotate(42deg);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:nth-child(3) {
            transform: translateY(-0.6rem) rotate(-45deg);
          }
          @media ${DEVICE.maxmd} {
            &:nth-child(1) {
              transform: translateY(1rem) rotate(45deg);
            }
            &:nth-child(3) {
              transform: translateY(-0.8rem) rotate(-45deg);
            }
          }
        }
      }
    }
  }
`
