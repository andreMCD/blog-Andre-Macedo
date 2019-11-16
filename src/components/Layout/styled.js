import styled from "styled-components"

export const LayoutContainer = styled.main`
  display: grid;
  grid-template:
    "head main aside" 100vh
    / auto 1fr 50px;
`

export const LayoutContent = styled.section`
  grid-area: main;
  width: 100%;

  overflow: auto;
`
