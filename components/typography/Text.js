import React from "react"
import styled from "styled-components"
import Colors from "../Colors"

/**
 * Text element for a page.
 * Should be used in place of <p>, because this
 * is a globally-styled version
 */
export default function Text(props) {
  const Text = styled.p`
    margin: 12px 0;

    font-family: "Roboto", sans-serif;
    color: ${props.color};
    ${props.style};
  `
  return <Text>{props.children}</Text>
}
Text.defaultProps = {
  style: "",
  color: Colors.text.color,
}
