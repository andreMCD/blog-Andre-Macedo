import React from "react"

import links from "./content"

import * as S from "./styled"

const LogoIcon = () => (
  <S.LogoIconWrapper>
    {links.map((link, i) => (
      <S.LogoIconItem key={i}>
        <S.LogoIconLink to={link.url}>{link.label}</S.LogoIconLink>
      </S.LogoIconItem>
    ))}
  </S.LogoIconWrapper>
)

export default LogoIcon
