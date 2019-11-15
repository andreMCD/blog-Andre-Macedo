import styled from "styled-components"
import { Link } from "gatsby"

export const LogoIconWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoIconLink = styled(Link)`
  color: #00adb5;
  text-decoration: none;
`

export const LogoIconItem = styled.strong`
  font-size: 3rem;
  font-weight: bold;
`
