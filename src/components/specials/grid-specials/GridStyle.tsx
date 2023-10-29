import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const GridSpecialsStyle = styled.section`
  .articles{
    margin: 0 auto;
    display: grid;
    grid-gap: 3.25rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
`
