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
  background-color: ${ props => props.color === 'blue' ? '#48a1bf' : COLORS[props.color] };
  @media ${ DEVICE.maxmd} {
    margin-top: 10rem;
  }
  .banner-gradient {
    height: 100vh;
    width: calc(100% - 16.5rem);
    margin-left: ${ props => setContentMargin(props.index) };
    position: relative;
    z-index: 1;
    @media ${ DEVICE.maxmd} {
      margin-left: 0 !important;
      max-width: 100%;
      width: 100%;
      height: 60rem;
    }
    @media ${ DEVICE.maxxs} {
      height: 40rem;
    }
    .banner-gradient-inner {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center; 
      justify-content: center;
      position: relative; 
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
        height: 100% !important;
        object-fit: cover;
      }  
    }
  }
  .learn-content {
    margin-left: ${ props => setContentMargin(props.index)};
    @media ${ DEVICE.maxmd} {
      margin-left: 0 !important;
      max-width: 100%;
      padding: 4rem;
    }
    @media ${ DEVICE.maxxs} {
      padding: 2rem;
    }
    max-width: 90.375rem;
    width: 100%;
    margin-top: -25rem;
    position: relative;
    z-index: 1;
    .wrapper {
      max-width: 67rem;
      width: 100%;
      margin-left: 5.8rem;
      @media ${ DEVICE.maxmd} {
        max-width: 100%;
        width: 100%;
        margin-left: 0;
      }
      h1, h2, h3, a, p, strong, li, td, th {
        color: ${ COLORS.white } !important;
        line-height: normal;
      }

      h1 {
        font-size: 4rem;
        @media ${ DEVICE.maxxs} {
          font-size: 2.5rem;
        }
      }

      h2 {
        font-size: 3rem;
        line-height: 1;
        @media ${ DEVICE.maxxs} {
          font-size: 2.5rem;
        }
      }

      h2, h3, h4, h5 {
        line-height: 1;
        position: relative;
        padding-left: 2rem;
        &:before {
          position: absolute;
          content: "";
          width: 0.6875rem;
          height: 100%;
          border-radius: 5rem;
          background: ${({ color }) => determineColor(color)};  
          left: 0;
        }
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
        figcaption {
          background: transparent !important;
          padding: 0 !important;
          box-shadow: none !important;
          position: absolute;
          top: 3rem;
          right: 5rem;
          @media ${ DEVICE.maxmd} {
            right: 10rem;
          }
          .caption,
          .author {
            display: none;
          }
          span {
            color: #fff;
            font-size: 1.125rem;
            font-style: normal;
          }
        }
        &:before {
          position: absolute;
          content: "";
          height: 100%;
          width: 100%;
          background: ${ props => IMAGE_GRADIENTS[props.color] };
        }
      }

      .data-card-wrapper {
        .image {
          &:before {
            background: ${ props => IMAGE_GRADIENTS[props.color] };
          }
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

const determineColor = (color:string) => {
  switch (color) {
    case 'red':
      return '#6967F1';
    case 'purple':
      return '#48A1BF';
    case 'blue':
      return '#F5AA28';
    case 'yellow':
      return '#C5242A';
    default:
      return '#6967F1';  // Valor por defecto
  }
};