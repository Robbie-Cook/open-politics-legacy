import { ThemeManager } from "@robbie-cook/react-components"

/**
 * Taking the default theme from react-components and modifying it
 */
import React from "react"
import styled from "styled-components"

// const Title: styled.p`
//   font-weight: bold;
//   font-family: 'Roboto Slab', sans-serif;
//   margin-right: 25px;
//   text-transform: lowercase;
// `

// Link color
const link = {
  color: "#6385a9",
  colorActive: "#1565c0",
  colorHighlight: "#6385a9",
}

const textColor = "#ffffff"
const backgroundColor = "#F58C8C"

const text = {
  color: textColor,
  font: "'Roboto', sans-serif",
}

const page = {
  backgroundColor: backgroundColor,
}

const navbar = {
  backgroundColor: backgroundColor,
  height: "60px",
  title: {
    name: "Open Politics",
    font: "bold 20px 'Roboto Slab',serif"
  },
  color: text.color,
  padding: "0px 90px 0px 90px",
  mobilePadding: "0 30px",
  // Navbar button styles
  links: {
    backgroundColor: backgroundColor,
    color: textColor,
    borderColor: "transparent",
    activeColor: link.color,
    hoverColor: link.color,
  },
}

const button = {
  backgroundColor: link.color,
  color: text.color,
  borderColor: link.color,
  hover: {
    backgroundColor: backgroundColor,
    color: link.color,
  },
}

const MyTheme = ThemeManager.fillTheme({
  textColor: textColor,

  backgroundColor: backgroundColor,

  link: link,

  text: text,

  page: page,

  navbar: navbar,

  button: button,
})

export default MyTheme
