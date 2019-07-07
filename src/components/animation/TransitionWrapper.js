import styled from "styled-components"
import posed from "react-pose"
import Colors from "../Colors"
import React, { PureComponent } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import { isThisTypeNode } from "typescript"

/**
 * A loading screen
 */
class TransitionWrapper extends PureComponent {
  constructor(props) {
    super(props)
  }

  PosedDiv = posed.div({
    visible: {
      opacity: 1,
      height: "auto",
    },
    hidden: {
      opacity: 0,
      height: "0px",
      transition: {
        default: { ease: "linear", duration: 100 },
      },
    },
  })

  StyledDiv = styled(this.PosedDiv)``

  SpinnerWrapper = styled.div`
    min-width: 100px;
    color: ${Colors.text.color};
    animation-name: spin;
    animation-duration: 2500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `

  render() {
    return (
      <>
        <this.StyledDiv pose={this.props.loaded ? "hidden" : "visible"}>
          <this.SpinnerWrapper>
            <FontAwesomeIcon
              style={{ fontSize: "65px", display: "flex", margin: "auto" }}
              icon={faCircleNotch}
            />
          </this.SpinnerWrapper>
        </this.StyledDiv>
        <this.StyledDiv pose={this.props.loaded ? "visible" : "hidden"}>
          {this.props.children}
        </this.StyledDiv>
      </>
    )
  }
}

export default TransitionWrapper
