import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"
import Aside from "../Aside"

// Imports all styles
import GlobalStyles from '../../styles/global'
import * as S from './styled'

const Layout = ({ children }) => {

  return (
        <S.LayoutContainer>
          <GlobalStyles />
          <Header />
          <S.LayoutContent>{children}</S.LayoutContent>
          <Aside />
        </S.LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
