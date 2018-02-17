import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Color from "color"

import Header from "../components/Header"

import "../../node_modules/tachyons/css/tachyons.css"
import "../styles/index.css"

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-column items-center pa4">
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
      <style>@import url('https://use.typekit.net/mqs6xst.css');</style>
    </Helmet>
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
