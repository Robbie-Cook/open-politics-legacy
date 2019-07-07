import styled from "styled-components"
import React, { Component } from "react"
import PropTypes from "prop-types"
import Colors from "../Colors"
import Spacer from "../Spacer"
import Codify from "../Codify"

/**
 *  Get appropriate heading
 *  Type: h1, h2, etc,
 *  Content: The child elements
 */
function getHeading(props, type, className) {
  const myStyles = `
        font-family: "Roboto Slab", sans-serif;
        font-weight: bold;
        margin: ${props.noMargin ? "0px" : props.margin};
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
    props.children
  )

  return (
    <>{props.codify ? <Codify>{headingElement}</Codify> : headingElement}</>
  )
}

/**
 * Heading section for a page
 * Should be used for all headings. Currently, only supports h1 and h2.
 * Example usage: <Heading type="h2">My heading</Heading>
 */
export default function Heading(props) {
  const HeadingWrapper = styled.div`
    display: flex;
    width: fit-content;
    & * {
      align-self: center;
    }
    ${props.center && "align-self: center"};
    ${props.style};
  `
  return (
    <HeadingWrapper>
      {getHeading(
        props,
        props.type,
        props.className,
      )}
    </HeadingWrapper>
  )
}
Heading.propTypes = {
  type: PropTypes.string,
  codify: PropTypes.bool,
  style: PropTypes.string,
  margin: PropTypes.string,
  center: PropTypes.bool,
  noMargin: PropTypes.bool,
}
Heading.defaultProps = {
  margin: "0 0 20px 0;",
  center: false,
  noMargin: false,
}
