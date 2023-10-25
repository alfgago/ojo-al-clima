import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"


export const LEARN_VERTICAL_GRADIENTS: PARAMS = {
  yellow: "linear-gradient(85deg, #F58B28 3.86%, rgba(246, 189, 41, 0.00) 95.84%);",
  red: "linear-gradient(90deg, #C5242A 4.38%, rgba(226, 65, 48, 0.00) 99.82%);",
  blue: "linear-gradient(85deg, #37A1BD 3.86%, rgba(63, 68, 143, 0.00) 95.84%);",
  purple: "linear-gradient(85deg, #45489F 3.86%, rgba(63, 68, 143, 0.00) 95.84%);"
}
export const LEARN_HORIZONTAL_GRADIENTS: PARAMS = {
  yellow: "linear-gradient(180deg, rgba(47, 47, 105, 0.00) 0%, rgba(246, 189, 41, 0.00) 0.01%, #F58B28 100%);",
  red: "linear-gradient(0deg, #C5242A 0%, rgba(197, 36, 42, 0.00) 100%)",
  blue: "linear-gradient(180deg, rgba(47, 47, 105, 0.00) 0%, rgba(72, 161, 191, 0.00) 0.01%, #48A1BF 100%);",
  purple: "linear-gradient(180deg, rgba(47, 47, 105, 0.00) 0%, rgba(63, 68, 143, 0.00) 0.01%, #3F448F 100%);"
}
export const IMAGE_GRADIENTS: PARAMS = {
  red: "linear-gradient(0deg, #C5242A 0%, rgba(197, 36, 42, 0.00) 100%);",
  purple: "linear-gradient(180deg, rgba(47, 47, 105, 0.00) 0%, rgba(63, 68, 143, 0.00) 0.01%, #3F448F 100%);",
  blue: "linear-gradient(180deg, rgba(72, 161, 191, 0.00) 0%, #48A1BF 73.44%);",
  yellow: "linear-gradient(180deg, rgba(47, 47, 105, 0.00) 0%, rgba(246, 189, 41, 0.00) 0.01%, #F58B28 100%);" 
} 
 
const setContentMargin = (index: number) => {
  return `calc(5.8rem + ${(index) * 5.8}rem)`;
} 
 
export const LearnPageStyle = styled.section<LearnProps>`
  margin-top: -5rem;
  padding-bottom: 5rem;
  background-color: ${ props => COLORS[props.color] };
  .banner-gradient {
    height: 100vh;
    width: calc(100% - 16.5rem);
    margin-left: ${ props => setContentMargin(props.index) };
    position: relative;
    z-index: 1;
    .banner-gradient-inner {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center; 
      justify-content: center;
      posistion: relative; 
      &:before { 
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background: ${ props => LEARN_VERTICAL_GRADIENTS[props.color] };
      }
      &:after {
        position: absolute;
        content: "";
        height: 50%;  
        width: 100%;
        background: ${ props => LEARN_HORIZONTAL_GRADIENTS[props.color] };
        bottom: 0;
      }
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }  
    }
  }
  .learn-content {
    margin-left: ${ props => setContentMargin(props.index)};
    max-width: 90.375rem;
    width: 100%;
    margin-top: -25rem;
    position: relative;
    z-index: 1;
    .wrapper {
      max-width: 67rem;
      width: 100%;
      margin-left: 5.8rem;
      h1, h2, h3, a, p, strong, li, td, th {
        color: ${ COLORS.white } !important;
        line-height: normal;
      }

      h1 {
        font-size: 4rem;
      }

      a, p {
        font-size: 1.5rem;

      }

      blockquote {
        border-color: ${ COLORS.white };
      }

      ul {
        padding-left: 2rem;
        li {
          padding: 0.3rem 0;
          font-size: 1.5rem;
          &::marker { 
            color: #6967F1;
          }
        }
      }

      .image-gradient {
        margin: 3rem -11rem -5rem;
        position: relative;
        z-index: -1;
        &:before {
          position: absolute;
          content: "";
          height: 100%;
          width: 100%;
          background: ${ props => IMAGE_GRADIENTS[props.color] };
        }
      }

    }
  }

`

interface LearnProps {
  color: string;
  index: number;
}

interface PARAMS {
  [key: string]: string;
}
