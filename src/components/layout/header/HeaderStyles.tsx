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
  .header-container { 
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: auto;
    .site-logo {
      padding-left: 5rem;
      svg {
        max-width: 8rem;
        display: block;
        rect:nth-child(2) {
          filter: brightness(0.6);
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
              .parent {
                padding: 1rem 0;
                display: block;
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
    }
    .learn {
      width: 23rem;
      background: ${GRADIENTS.red};
    }
  }
`
