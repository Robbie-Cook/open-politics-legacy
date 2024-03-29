import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Colors from "./Colors"

/**
 *  A bordered box.
 */
class BorderBox extends Component {
  render() {
    const Box = styled.div`
      border: ${this.props.border};
      border-radius: 4px;
      padding: 20px;
      display: flex;
      flex-direction: ${this.props.horizontalScroll ? "row" : "column"};
      ${this.props.width ? `width: ${this.props.width}` : ``};
      ${this.props.height ? `height: ${this.props.height}` : ``};
      ${this.props.style};

      ${this.props.horizontalScroll ? "overflow-x: auto" : ""};
      ${this.props.verticalScroll ? "overflow-y: auto" : ""};

      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #2b2b2b;
      }

      &::-webkit-scrollbar {
        width: 10px;
        background-color: ${Colors.backgroundColor};
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${Colors.text.color};
        );
      }
    `
    return <Box>{this.props.children}</Box>
  }
}
BorderBox.propTypes = {
  width: PropTypes.string, // Should be like "50px"
  height: PropTypes.string,
  // Whether to scroll horizontally or vertically.
  horizontalScroll: PropTypes.bool,
  verticalScroll: PropTypes.bool,
}
BorderBox.defaultProps = {
  border: `8px solid ${Colors.text.color};`
}

export { BorderBox }
