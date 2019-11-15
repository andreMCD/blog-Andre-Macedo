import React from "react"

import { Home } from "styled-icons/boxicons-regular/Home"
import { LightBulb as Light } from "styled-icons/octicons/LightBulb"

import * as S from "./styled"

const MenuBar = () => (
  <S.MenuBarGroup>
    <S.MenuBarLink to="/" title="Voltar para Home">
      <S.MenuBarItem>
        <Home />
      </S.MenuBarItem>
    </S.MenuBarLink>
    <S.MenuBarItem title="Mudar Tema">
      <Light />
    </S.MenuBarItem>
  </S.MenuBarGroup>
)

export default MenuBar
