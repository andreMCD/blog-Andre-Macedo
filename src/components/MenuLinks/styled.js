import styled from "styled-components"
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav`
  display: flex;
  justify-content: center;
`

export const MenuLinksList = styled.ul`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 100px;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 500;

  > li:nth-child(1) {
    order: 1;
  }
  > li:nth-child(3) {
    order: -1;
  }
  > li:nth-child(4) {
    order: -2;
  }
`

export const MenuLinksItem = styled.li`
  margin: 40px 0;
  letter-spacing: 1px;
  transform: rotate(-90deg);

  :last-child {
    margin: 0 0 20px 0;
  }

  .active {
    color: #00adb5;
    border-bottom: 1px solid #00adb5;
  }
`

export const MenuLinksLink = styled(Link)`
  color: #393e46;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #00adb5;
    border-bottom: 1px solid #00adb5;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 2px;
    background: #00adb5;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }
`
