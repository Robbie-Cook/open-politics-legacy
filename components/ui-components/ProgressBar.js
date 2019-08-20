import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import TransitionWrapper from "../animation/TransitionWrapper"

export function ProgressBar(props) {
  const width = 300
  
  const ProgressBarWrapper = styled.div`
    border: 8px solid white;
    border-radius: 100px;
    width: ${width}px;
    height: 40px;
  `

  var getProgressBarSectionRender = function(section) {
    // const myWidth = (100 / width) * section.getPercent() 
  }

  // var sections = (() => {
  //   let jsx = []
  //   props.sections.forEach((section) => {
  //     jsx.append(getProgressBarSectionRender(section))
  //   })
  // })()

  return (
    // <ProgressBarWrapper>
    //   {sections}
    // </ProgressBarWrapper>
    <></>
  )

}

// Represents a portion of the progress bar.
// e.g index, percent, etc.
export function ProgressBarSectionData(index = 0, percent = 50, color = 'green') {
  // The data which represents a section of the progress bar  
  const data = {
      index: index, 
      percent: percent, 
      color: color
    }

  let getIndex = function() {
    return data.index
  }

  let getPercent = function() {
    return data.percent
  }

  let getColor = function() {
    return data.color
  }
}

// Given a precalculated width, gives a progress bar graphic
// Internal function
function ProgressBarSection(props) {
  let styledProgressBarSection = styled.div`
    e
  `
  return 
}



ProgressBar.defaultProps = {
  sections: [new ProgressBarSectionData()]
}
