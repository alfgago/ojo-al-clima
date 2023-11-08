import styled from "styled-components"

import { COLORS, GRADIENTS, GRADIENTS_VERTICALS, DEVICE } from "@/styles/variables"

export const ArticleStyle = styled.section<{ color: string }>`
  display: flex;
  justify-content: center;
  gap: 3.25rem;
  padding-bottom: 6rem;
  @media ${DEVICE.maxmd} {
    flex-direction: column;
    padding: 0 2rem;
  }
  .wordpress-content {
    width: 100%;
    max-width: 55.5rem;
    @media ${DEVICE.maxmd} {
      max-width: 100%;
    }
    a {
      color: #48A1BF;
      text-decoration-line: underline;
    }
    blockquote {
      background: white;
      border: none;
      border-radius: 1.1rem;
      &:before {
        border-radius: 1.25rem;
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        background: ${props => GRADIENTS[props.color]};
        padding: 3px;  /* Grosor del borde */
        margin: -3px;  /* Compensar el desplazamiento del padding */
      }
      path {
        fill: ${props => COLORS[props.color]};
      }
    }
    .box,
    .old-box {
      background: white;
      border: none;
      border-radius: 1.1rem;
      position: relative;
      h2,h3,h4,h5 {
        &:before {
          background: ${props => GRADIENTS_VERTICALS[props.color]};
        }
      }
      &:before {
        border-radius: 1.25rem;
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        background: ${props => GRADIENTS[props.color]};
        padding: 3px;  /* Grosor del borde */
        margin: -3px;  /* Compensar el desplazamiento del padding */
      }
    }
    .image-carousel {
      ul.slick-dots {
        button:before {
          color: #EBEBEBEE;
          opacity: 1;
        }
        li.slick-active {
          button:before {
            color: ${props => COLORS[props.color]};
          }
        }
      }
    }
    ul {
      li {
        &::marker { 
          color: ${props => COLORS[props.color]};
        }
      }
    }
  }
  .recents-block {
    @media ${DEVICE.md} {
    
    }
    @media ${DEVICE.maxmd} {
      max-width: 100%;
      .articles-container {
        display: grid;
        grid-gap: 3.25rem;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      }
    }
  }

`
