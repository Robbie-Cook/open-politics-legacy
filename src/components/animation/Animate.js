import React, { Component } from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import styled from "styled-components"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionState } from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import posed from "react-pose"

// A class that transitions
class Animate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  render() {
    const Box = posed.div({
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    })

    return (
      <>
        <TransitionState>
          {({ transitionStatus, exit, enter }) => {
            console.log("exit object is", exit)
            console.log("enter object is", enter)

            return (
              <Box
                className="box"
                pose={
                  ["entering", "entered"].includes(transitionStatus)
                    ? "visible"
                    : "hidden"
                }
              >
                {this.props.children}
              </Box>
            )
          }}
        </TransitionState>
      </>
    )
  }
}
Animate.propTypes = {
  optionalWidth: PropTypes.number,
}

export default Animate
