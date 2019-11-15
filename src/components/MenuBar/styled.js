import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarGroup = styled.div`
  display: flex;
  flex-flow: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: #393e46;
  display: block;
  cursor: pointer;
  height: 3.75rem;
  padding: 0.8rem;
  transition: color 0.5s;

  &:hover {
    color: #00adb5;
  }
`
