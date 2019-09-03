import { Transition } from "@robbie-cook/react-components"
import React from "react"
import { Circle, Layer, Stage } from "react-konva"
import seatingData from "./data/seatingData"
import PropTypes from "prop-types"

// ParliamentGraphic component
function ParliamentGraphic({ callback }) {
  let width = 380
  let height = 400

  let generateCircles = () => {
    let jsx = []
    seatingData.forEach(element => {
      jsx.push(
        <Circle
          x={element.x}
          y={element.y}
          width={18}
          height={18}
          fill={"#FEFFFE"}
          key={element.id}
          onClick={() => callback(element.id)}
        />
      )
    })
    return jsx
  }

  return (
    <Stage width={width} height={height}>
      <Layer>{generateCircles()}</Layer>
    </Stage>
  )
}
ParliamentGraphic.defaultProps = {
  callback: () => {
    console.log("Default clicked")
  },
  activeMember: 0,
}
ParliamentGraphic.propTypes = {
  activeMember: PropTypes.number,
  callback: PropTypes.func,
}

export default ParliamentGraphic
