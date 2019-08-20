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
export default function Spacer(props) {
  const StyledSpacer = styled.div`
    height: ${props.height};
    width: ${props.width};
  `
  return <StyledSpacer />
}
Spacer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}
