import Colors from "../data/Colors"
import React, { Component } from "react"
import PropTypes from "prop-types"

/**
 * Sizing of views
 */
class Sizes {
  static mobileSize = "900"
}

/**
 * Styles to apply when screen is mobile-sized
 */
class MobileView {
  constructor(style) {
    this.style = style
  }

  toString() {
    const mSize = Sizes.mobileSize
    return (`
      @media (max-width: ${mSize}px) {
        ${this.style};
      }`
    )
  }
}

export { MobileView, Sizes }
