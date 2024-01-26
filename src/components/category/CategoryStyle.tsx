import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const CategoryStyle = styled.section`
  .wrapper-category {
    position: relative;
    max-width: 84.6875rem;
    width: 100%;
    margin: 4.38rem auto;
    display: flex;
    gap: 3.38rem;
    z-index: 9;
    
    @media ${DEVICE.maxmd} {
      padding: 0 2rem;
    }
    @media ${DEVICE.maxxs} {
      flex-direction: column;
    }
    .articles-container {
      .featured-article {
        height: 35.3125rem;
      }
    }
    .category-articles {
      display: grid;
      grid-gap: 3.25rem;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      margin: 3.25rem 0 6.25rem; 
    }
  }
`
