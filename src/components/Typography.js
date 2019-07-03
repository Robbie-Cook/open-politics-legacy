import styled from "styled-components"
import React, { Component } from "react"
import PropTypes from "prop-types"
import Colors from "../data/Colors"
import Spacer from "./Spacer"
import Codify from "./Codify"

/**
 *  Common components relating to text. This includes
 *  <Text> and <Heading>.
 */

/**
 * Heading section for a page
 * Should be used for all headings. Currently, only supports h1 and h2.
 * Example usage: <Heading type="h2">My heading</Heading>
 */
class Heading extends Component {
  /**
   *  Get appropriate heading
   *  Type: h1, h2, etc,
   *  Content: The child elements
   */
  getHeading(type, style, className) {
    const myStyles = `
      font-family: "Roboto Slab", sans-serif;
      font-weight: bold;
      margin: ${this.props.margin};
      text-transform: lowercase;
      color: ${Colors.text.color};
    `

    const h1Height = "53px"
    const H1 = styled.h1`
      ${myStyles}
      font-size: ${h1Height};
      line-height: ${h1Height};
    `

    // H2 inherits and overrides styles from H1
    const H2 = styled.h2`
      ${myStyles}
      font-size: 40px;
    `

    const H3 = styled.h3`
      ${myStyles}
      font-size: 30px;
    `

    const H4 = styled.h4`
      ${myStyles}
      font-size: 25px;
    `

    const H5 = styled.h5`
      ${myStyles}
      font-size: 20px;
    `

    const HeadingWrapper = styled.div`
      display: flex;
      width: fit-content;
      & * {
        align-self: center;
      }
      ${this.props.center && "align-self: center"};
      ${this.props.style};
    `

    let headingElementToUse = ""

    // Probably should use TypeScript for this
    if (type === "h1" || type === undefined) {
      headingElementToUse = H1
    } else if (type === "h2") {
      headingElementToUse = H2
    } else if (type === "h3") {
      headingElementToUse = H3
    } else if (type === "h4") {
      headingElementToUse = H4
    } else if (type === "h5") {
      headingElementToUse = H5
    }

    const headingElement = React.createElement(
      headingElementToUse,
      { className: className },
      this.props.children
    )

    return (
      <HeadingWrapper>
        {this.props.codify ? <Codify>{headingElement}</Codify> : headingElement}
      </HeadingWrapper>
    )
  }
  render() {
    return this.getHeading(
      this.props.type,
      this.props.style,
      this.props.className,
      this.props.codify, // option to display the heading as < {content} />
      this.props.margin, 
    )
  }
}
Heading.propTypes = {
  type: PropTypes.string,
  codify: PropTypes.bool,
  style: PropTypes.string,
  margin: PropTypes.string,
  center: PropTypes.bool,
}
Heading.defaultProps = {
  margin: "0 0 20px 0;",
  center: false,
}

/**
 * Text element for a page.
 * Should be used in place of <p>, because this
 * is a globally-styled version
 */
class Text extends Component {
  render() {
    Text = styled.p`
      margin: 12px 0;
      
      /* Local to this politics */
      font-family: 'Roboto', sans-serif;
      ${this.props.style};
    `
    return <Text>{this.props.children}</Text>
  }
}
Text.defaultProps = {
  style: "",
}

class Link extends Component {
  render() {
    const StyledLink = styled.a`
      font-family: 'Roboto', sans-serif;
      color: ${Colors.link.color};
      ${this.props.style};
    `
    return(
      <StyledLink>{this.props.children}</StyledLink>
    );
  }
}
Link.defaultProps = {
  style: "",
}

export { Heading, Text, Link }