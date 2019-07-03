import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

class Button extends Component {
  render() {
    const size = this.props.size
    const StyledButton = styled.div`
      width: ${this.props.size};
      height: ${this.props.size};
      background-color: ${this.props.color};
      border-radius: 100%;
    `
    return <StyledButton />
  }
}
Button.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
}
Button.defaultProps = {
  color: "grey",
  size: "14px",
}

// Sample component
class ParliamentGraphic extends Component {
  render() {
    return <Button />
  }
}
export default ParliamentGraphic
