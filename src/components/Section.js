import React, { Component } from "react"
import styled from "styled-components"
import Colors from "../data/Colors"
import Sizes from "../data/Sizes"

/**
 * A component designed to take up exactly the window size (minus the
 * navbar for the first element) on desktop, and an arbitrary size on
 * mobile.
 *
 * The code for setting the size of the div was taken from
 * https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
 */
class Section extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    const MySection = styled.div`
      min-height: ${this.state.height-Sizes.navbar.height}px;
      display: flex;
      ${this.props.style};
    `

    return <MySection>{this.props.children}</MySection>
  }
}

export default Section
