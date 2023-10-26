import styled from "styled-components"

import { COLORS, GRADIENTS, DEVICE } from "@/styles/variables"

export const ListStyle = styled.div`
ul {
  padding-left: 2rem;
  li {
    padding: 0.3rem 0;
    font-size: 1.25rem;
    &::marker { 
      color: #828282;
    }
  }
}

`
