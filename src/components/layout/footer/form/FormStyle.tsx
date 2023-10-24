import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const FormStyle = styled.section`
  background: url("/images/footer-background.webp") no-repeat;
  background-color: ${COLORS.black};
  background-size: cover;
  position: relative;
  &:before { 
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #070A11 100%);
  }
  .form-wrapper {
    width: 84.4375rem;
    margin: 0 auto;
    padding: 4.5rem 0 5.31rem;
    position: relative;
    z-index: 1;
    .title {
      h1,
      h5 {
        color: ${COLORS.white};
        font-size: 3rem;
        font-style: normal;
        font-weight: 900;
        position: relative;
        padding-left: 2rem;
        line-height: 1;
        &:before {
          position: absolute;
          content: "";
          width: 0.6875rem;
          height: 100%;
          border-radius: 5rem;
          background: ${COLORS.purple};  
          left: 0;
        }
      }
      margin-bottom: 2.7rem;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      .inputs {
        max-width: 52rem;
        width: 100%;
        input,
        textarea {
          border-radius: 1.875rem;
          border: 0.5px solid #FFF;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(5px);
          height: 3.125rem;
          width: 100%;
          padding: 0 1.87rem;
          outline: none;
          font-size: 1rem;
          font-weight: 700;
          &::placeholder {
            color: #3F448F;
            opacity: 1; /* Firefox */
          }
          
          /* Estilo para Internet Explorer 10-11 */
          &:-ms-input-placeholder {
            color: #3F448F;
          }
          
          /* Estilo para Edge */
          &::-ms-input-placeholder {
            color: #3F448F;
          }
          
          /* Estilo para Safari, Chrome, Opera, entre otros */
          &::-webkit-input-placeholder {
            color: #3F448F;
          }
        }
        textarea { 
          min-height: 7.6875rem;
          border-radius: 1.5625rem;
          padding-top: 1rem;
        }

        .error-message {
          font-size: 1rem;
          font-weight: 700;
          color: ${COLORS.red};
        }

      }
      button {
        display: flex;
        width: 11.6875rem;
        max-width: 100%;
        padding: 0.825rem 3.125rem;
        justify-content: center;
        border-radius: 3.125rem;
        background: #3F448F;
        color: ${COLORS.white};
        font-size: 1.25rem;
        font-weight: 600;
        font-style: normal;
        line-height: normal;
        border: none;
        cursor: pointer;
      }
      span.form-request-message {
        font-size: 1.2rem;
        text-shadow: 0rem 0.3rem 0.6rem #636363;
        font-weight: 800;
       &.error {
        color: ${COLORS.red};
       }
       &.success {
        color: ${COLORS.green};
       }
      }
    }
    .meta-data {
      margin-top: 3.62rem;
      max-width: 51.875rem;
      width: 100%;
      display: none;
      a, span {
        color: ${COLORS.white};
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: none;
      }
    }
  }
  .learn-colors {
    position: absolute;
    display: flex;
    height: 100%;
    right: 0;
    top: 0;
    div {
      width: 5.8rem;
      height: 100%;
      &.red {
        background: ${GRADIENTS.red};
      }
      &.purple {
        background: ${GRADIENTS.purple};
      }
      &.blue {
        background: ${GRADIENTS.blue};
      }
      &.yellow {
        background: ${GRADIENTS.yellow};
      }
    }
  }
  &.on-contact-page {
    .meta-data {
      display: block;
    }
  }
  &.on-about-page {
    .learn-colors {
      height: 160rem;
      bottom: 0;
      top: auto;  
      &:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 50rem;
        top: 0;
        background: linear-gradient(0deg, rgba(7, 10, 17, 0.00) 0%, rgba(7, 9, 15, 0.18) 20.83%, #050507 100%);
      }
    }
  }
  &.on-home-page { 
    .learn-colors {
      height: 66rem;
      bottom: 0;
      top: auto;  
      &:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 50rem;
        top: 0;
        background: linear-gradient(0deg, rgba(7, 10, 17, 0.00) 0%, rgba(7, 9, 15, 0.18) 20.83%, #050507 100%);
      }
    }
  }
`
