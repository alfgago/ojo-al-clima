import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const SearchComponentsStyle = styled.section`
  .posts-wrapper {
    display: flex;
    max-width: 84.6875rem;
    margin: auto;
    flex-wrap: wrap;
    gap: 3.25rem;
    @media ${DEVICE.maxmd} {
      padding: 0 2rem;
    }
    .featured-article {
      flex: 1;
      order: 1;
    }
    .others-articles {
      order: 3;
      display: grid;
      grid-gap: 3.25rem;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      width: 100%;
    }
    .pagination-wrapper {
      order: 4;
      width: 100%;
      margin-bottom: 10rem; 
      @media ${DEVICE.maxxs} {
        margin-bottom: 1rem; 
      }
    }
    .recents-items {
      order: 2; 
      @media ${DEVICE.maxxs} {
        order: 5;
        margin-bottom: 5rem;
      }
    }
  }
`
