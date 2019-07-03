/**
 *  A styling component, which puts < /> tags around its children
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import Spacer from "./Spacer"
import styled from "styled-components"
import Colors from "../data/Colors"

/** Icons to display with text */
class TextIcon extends Component {
  render() {
    return <>{this.props.content}</>
  }
}
TextIcon.propTypes = {
  position: PropTypes.string, // where the icon is to be displayed relative to the content (left, right, ...)
}

// Sample component
class Codify extends Component {
  render() {
    const Wrapper  = styled.div`
      display: flex;
      align-items: center;
    `
    /* 
      Icons currently hard-coded, but should be passed as a prop if 
      custom icons are needed for headers 
     */
    const MyIcon = styled.span`
      font-size: ${this.props.fontSize};
      font-weight: bold;
      font-family: "Roboto Slab", sans-serif;
      color: ${this.props.color};
      opacity: ${this.props.opacity};
    `

    const leftIcon = <MyIcon>&lt;</MyIcon>
    const rightIcon = (
      <>
        <Spacer width={this.props.rightTagSpacing} />
        <MyIcon> /&gt;</MyIcon>
      </>
    )

    return (
      <Wrapper>
        <TextIcon position="left" content={leftIcon} />
        {this.props.children}
        <TextIcon position="right" content={rightIcon} />
      </Wrapper>
    )
  }
}
Codify.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  rightTagSpacing: PropTypes.string,
  opacity: PropTypes.string,
}
Codify.defaultProps = {
  color: Colors.page.secondaryColor,
  fontSize: "69px",
  rightTagSpacing: "13px",
  opacity: "1",
}
export default Codify
