import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const CarouselStyle = styled.div`
  .slide-image-container {
    .slide-image-wrapper {
      margin: -1rem;
      padding: 2rem;
      .image-block {
        figcaption {
          box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.07) !important;
        }
      }
    }
  }
  ul.slick-dots {
    bottom: 1rem;
     button:before {
      font-size: .8rem;
    }
  }
`
 