import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Colors from "../data/Colors"

/**
 * Wraps a set of Icons
 */
class IconsWrapper extends Component {
  render() {
    const IconsWrapperStyledComponent = styled.div`
      display: flex;
      margin-top: 17px;
      align-items: center;
    `
    return (
      <IconsWrapperStyledComponent>
        {this.props.children}
      </IconsWrapperStyledComponent>
    )
  }
}
IconsWrapper.propTypes = {}

/** Represents one icon on a page */
class Icon extends Component {
  render() {
    const diameter = 50

    const IconStyledComponent = styled.div`
      width: ${diameter}px;
      height: ${diameter}px;
      border-radius: ${diameter / 2}px;
      line-height: ${diameter}px;
      text-align: center;
      font-size: ${diameter - 15}px;
      cursor: pointer;
      background-color: ${Colors.text.color};
      margin: 0 9px;
      color: ${Colors.backgroundColor};
      transition: 0.1s;
      transition-timing-function: ease-out;

      &:hover {
        background-color: ${Colors.link.color};
        color: ${Colors.text.color};
      }

      &:active {
        background-color: ${Colors.link.color};
        color: ${Colors.text.color};
      }
    `

    const StyledA = styled.a`
      color: inherit;
      &:hover {
        color: inherit;
      }
    `
    
    return (
      <IconStyledComponent>
        <StyledA href={this.props.href}>{this.props.children}</StyledA>
      </IconStyledComponent>
    )
  }
}
Icon.propTypes = {}

export { Icon, IconsWrapper }
