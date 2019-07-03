import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Dimensions from "./Dimensions"

/**
 * Component for providing space in a UI
 *
 * Values must be given like so
 * <Spacer width="40px" />
 */
class Spacer extends Component {
  propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
  }

  render() {
    const Spacer = styled.div`
      height: ${this.props.height};
      width: ${this.props.width};
    `

    return <Spacer />
  }
}

export default Spacer
