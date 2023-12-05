import styled from "styled-components"

import {
  COLORS,
  GRADIENTS,
  DEVICE,
  GRADIENTS_VERTICALS,
} from "@/styles/variables"

export const NewsletterStyle = styled.div`
  position: relative;
  background: #FFF;
  border-radius: 0.3125rem;
  box-shadow: 0px 4px 43px 0px rgba(0, 0, 0, 0.09);
  padding: 1.25rem 1.81rem 1.87rem 1.81rem;
  margin-top: 1.6rem;

  .learn-colors {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    border-radius: 0.3125rem 0.3125rem 0 0;
    overflow: hidden;
    div {
      height: 0.5rem;
      flex: 1;
      &.red {
        background: ${COLORS.red};
      }
      &.purple {
        background: ${COLORS.purple};
      }
      &.blue {
        background: ${COLORS.blue};
      }
      &.yellow {
        background: ${COLORS.yellow};
      }
    }
  }

  .form-wrapper {
    .title {
      h5 {
        color: #000;
        font-size: 2rem;
        font-weight: 800;
        line-height: normal;
      }
    }
    .description {
      padding: 0.62rem 0 1.87rem;
      max-width: 20rem;
      width: 100%;
      span {
        color: #000;
        font-size: 1rem;
        font-weight: 400;
        line-height: normal;
      }
    }
    form {
      width: 100%;
      display: flex;
      gap: 1.56rem;
      flex-direction: column;
      input {
        border-radius: 3.125rem;
        border: 1px solid #000;
        background: rgba(255, 255, 255, 0.55);
        backdrop-filter: blur(2.5px);
        display: flex;
        height: 2.9375rem;
        padding: 0.8125rem 0.875rem 0.75rem 0.875rem;
        align-items: center;
        color: #858585;
        font-family: Avenir;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 100%;
        outline: none;
      }
      button {
        display: flex;
        width: 100%;
        padding: 0.625rem 1.25rem;
        justify-content: center;
        align-items: center;
        gap: 2.1875rem;
        color: #FFF;
        text-align: center;
        font-family: Avenir;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: normal;
        border-radius: 3.125rem;
        background: ${COLORS.red};
        border: none;
        cursor: pointer;
      }
    }
  }
`
