import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const ArticleStyle = styled.section<{ color: string }>`
  display: flex;
  justify-content: center;
  gap: 3.25rem;
  @media ${DEVICE.maxmd} {
    flex-direction: column;
    padding: 0 2rem 5rem;
  }
  .wordpress-content {
    width: 100%;
    max-width: 55.5rem;
    @media ${DEVICE.maxmd} {
      max-width: 100%;
    }
    blockquote {
      border-color: ${props => COLORS[props.color]};
      path {
        fill: ${props => COLORS[props.color]};
      }
    }
  }
  .recents-block {
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
