import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import logo from "../../images/lamp-and-sun-mark.png"

const StyledLink = styled(Link)`
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  text-decoration: none !important;
`

const Header = () => (
  <StyledLink to="/">
    <img className="h4" src={logo} alt="The Lamp & Sun" />
  </StyledLink>
)

export default Header
