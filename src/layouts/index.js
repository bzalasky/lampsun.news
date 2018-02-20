import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "styled-components"
import Color from "color"

import Header from "../components/Header"

import "../../node_modules/tachyons/css/tachyons.css"
import "../styles/index.css"

import logo from "../images/lamp-and-sun-mark.png"

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-column items-center">
    <Helmet
      title="The Lamp & Sun"
      meta={[
        {
          name: "description",
          content: "Exposing dark money and hypocrisy in politics."
        },
        { name: "keywords", content: "dark money, politics, current events" }
      ]}
    >
      <link rel="shortcut icon" href={logo} />
      <style>@import url('https://use.typekit.net/mqs6xst.css');</style>
    </Helmet>
    <Header className="pt5 pb3" />
    <div className="pa4 mw7">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
