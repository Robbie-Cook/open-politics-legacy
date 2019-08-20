import React from "react"
import styled from "styled-components"
import Colors from "../Colors"

/**
 *  Common components relating to text. This includes
 *  <Text> and <Heading>.
 */
export default function Link(props) {
  const StyledLink = styled.a`
    font-family: "Roboto", sans-serif;
    color: ${Colors.link.color};
    ${props.style};
  `
  return <StyledLink>{props.children}</StyledLink>
}
Link.defaultProps = {
  style: "",
}
