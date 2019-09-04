import PropTypes from "prop-types"
import React from "react"
import { Circle, Layer, Stage } from "react-konva"
import seatingData from "./data/seatingData"
import { motion } from "framer-motion"

// ParliamentGraphic component
function ParliamentGraphic({ callback, activeMember }) {
  let width = 380
  let height = 400

  const enlargeCircle = async (circleRef, duration) => {
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
        scaleX: 1.2,
        scaleY: 1.2,
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

  const animateCircleCaller = async (circleRef, duration) => {
    setInterval(async () => {
      await animateCircle(circleRef, duration)
    }, 600)
  }

  let generateCircles = () => {
    let jsx = []
    seatingData.forEach(element => {
      let active = activeMember === element.id
      jsx.push(
        <Circle
          ref={node => {
            if (active && node != null) {
              animateCircleCaller(node, 0.2)
            }
          }}
          x={element.x}
          y={element.y}
          width={18}
          height={18}
          fill={active ? "grey" : "#FEFFFE" }
          key={element.id}
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
