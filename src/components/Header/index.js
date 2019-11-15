import React from "react"

import LogoIcon from "../LogoIcon"
import MenuLinks from "../MenuLinks"

import * as S from "./styled"

const Header = () => (
  <S.HeaderWrapper>
    <LogoIcon />
    <MenuLinks />
  </S.HeaderWrapper>
)

export default Header
