import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const GridImageStyle = styled.section<{ items: string, background: number }>`
  background: ${props => props.background ? COLORS.black : COLORS.white};
  padding: 3.25rem 0 5rem;
  @media ${DEVICE.maxmd} {
    padding: 3.25rem 2rem 5rem;
  }
  .grid-images-wrapper {
    max-width: 85rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.12rem;
    .heading {
      display: flex;
      justify-content: space-between;
      @media ${DEVICE.maxxs} {
        justify-content: center;
      }
      h3 {
        color: ${props => props.background ? COLORS.white : COLORS.black};
        font-size: 2rem;
        font-style: normal;
        font-weight: 800;
        line-height: 118%; /* 2.36rem */
        @media ${DEVICE.maxxs} {
          font-size: 2.5rem;
        }
      }
      .btn {
        @media ${DEVICE.maxxs} {
          display: none;
        }
        a {
          align-items: center;
          display: flex;
          gap: 0.62rem;
          color: ${props => props.background ? COLORS.white : COLORS.black};
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-decoration: none;
          svg {
            display: block;
            path {
              stroke: ${props => props.background ? COLORS.white : COLORS.black};
            }
          }
        }
      }
    }
    .content {
      display: grid;
      gap: 8.2rem;
      grid-template-columns: repeat(${props => props.items}, 1fr);
      @media ${DEVICE.maxxs} {
        gap: 6rem;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        justify-items: center;
      }
      .item {
        display: flex;
        align-items: center;
        img {
          object-fit: scale-down;
          display: block;
          width: 100%;
        }
      }
    }
  }
`
