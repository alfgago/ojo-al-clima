import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const SpecialStyle = styled.section`
 .wordpress-content{
  max-width: 84.5rem;
  width: 100%;
  margin: auto;
  padding-bottom: 8rem;
  @media ${DEVICE.maxmd}{
    padding: 0 2rem;
  }
 }
`
