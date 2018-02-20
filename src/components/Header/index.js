import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import logo from "../../images/lamp-and-sun-mark.png"

const StyledLink = styled(Link)`
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  text-decoration: none !important;
  width: 100%;
`

const Logo = styled.img``

const Header = props => (
  <header {...props}>
    <StyledLink to="/">
      <Logo className="h4" src={logo} alt="The Lamp & Sun" />
    </StyledLink>
  </header>
)

export default Header
