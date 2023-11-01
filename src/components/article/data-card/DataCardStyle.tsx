import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const DataCardStyle = styled.div`
  .data-card-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    @media ${DEVICE.maxxs} {
      margin-bottom: 5rem;
    }
    .image {
      width: 38%;
      position: relative;
      border-radius: 0.625rem;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
      }
      .data {
        position: absolute;
        bottom: 2rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        .value {
          color: ${COLORS.white};
          font-size: 6.25rem;
          font-style: normal;
          font-weight: 350;
          line-height: 118%; 
          width: fit-content;
          @media ${DEVICE.maxxs} {
            font-size: 5.25rem;
          }
          small {
            font-size: 2rem;
          }
        }
      }
      &:before {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        border-radius: 0.625rem;
        background: linear-gradient(180deg, rgba(47, 47, 105, 0.00) 0%, rgba(63, 68, 143, 0.00) 0.01%, #858585 100%);
      }
      @media ${DEVICE.maxxs} {
        width: 100%;
      }
    }
    .content {
      flex: 1;
      .title {
        h5 {
          color: ${COLORS.white};
          font-size: 3rem;
          font-style: normal;
          font-weight: 900;
          line-height: normal;
          margin-bottom: 2.8rem;
          @media ${DEVICE.maxxs} {
            font-size: 2.5rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
        }
      }
      .description {
        color: ${COLORS.white};
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      @media ${DEVICE.xs} {
        padding-left: 2.8rem;
      }
    }
  }
`
 