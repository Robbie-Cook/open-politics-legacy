import PropTypes from "prop-types"
import React from "react"
import { Circle, Layer, Stage } from "react-konva"
import seatingData from "./data/seatingData"
import { motion } from "framer-motion"
import { document } from "browser-monads"

// ParliamentGraphic component
function ParliamentGraphic({ callback, activeMember }) {
  let width = 380
  let height = 400

  const enlargeCircle = async (circleRef, duration = 0.2) => {
    return new Promise(resolve => {
      circleRef.to({
        scaleX: 1.3,
        scaleY: 1.3,
        duration,
        onFinish: () => {
          resolve(circleRef)
        },
      })
    })
  }

  const shrinkCircle = (circleRef, duration) => {
    return new Promise(resolve => {
      circleRef.to({
        scaleX: 1,
        scaleY: 1,
        duration,
        onFinish: () => {
          resolve(circleRef)
        },
      })
    })
  }

  const animateCircle = async (circleRef, duration) => {
    return new Promise(resolve => {
      enlargeCircle(circleRef, duration)
        .then(ref => {
          shrinkCircle(ref, duration)
        })
        .then(resolve(circleRef))
    })
  }

  let generateCircles = () => {
    let jsx = []
    seatingData.forEach(element => {
      let active = activeMember === element.id
      let currentRef = null
      jsx.push(
        <Circle
          ref={node => {
            if (active && node != null) {
              enlargeCircle(node, 0.2)
            }
          }}
          x={element.x}
          y={element.y}
          width={18}
          height={18}
          fill={"#FEFFFE"}
          key={element.id}
          onClick={() => {
            callback(element.id)
          }}
          onMouseEnter={(item) => {
            document.body.style.cursor = "pointer"
            // enlargeCircle(item.target)
          }}
          onMouseLeave={(item) => {
            // shrinkCircle(item.target)
            document.body.style.cursor = "default"
          }}
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
