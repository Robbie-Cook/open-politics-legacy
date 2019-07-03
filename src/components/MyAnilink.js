import React, { Component } from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

// Sample component
class MyAnilink extends Component {
  render() {
    const StyledAnilink = styled(AniLink)`
        ${this.props.style};
    `
    return (
      <StyledAnilink
        style={{ textDecoration: "none" }}
        fade
        to={this.props.path}
        duration={1}
      >
        {this.props.children}
      </StyledAnilink>
    )
  }
}
MyAnilink.defaultProps = {
  path: "/",
}

export default MyAnilink
