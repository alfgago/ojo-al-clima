import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const GalleryStyle = styled.div<{ items_per_row: number }>`
  .gallery-wrapper {
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(${props=> props.items_per_row}, 1fr);
    @media ${DEVICE.maxxs} {
      grid-template-columns: repeat(1, 1fr);
    }
    .image-block {
      margin: 0 0 3rem;
      figcaption {
        font-size: 1rem;
      }
    }
  }
`
 