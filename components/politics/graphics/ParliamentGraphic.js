import { document } from "browser-monads"
import PropTypes from "prop-types"
import React from "react"
import seatingData from "../data/seatingData"
import { enlargeCircle, shrinkCircle, animateCircle, generateCircles} from "./Konva"
import {Layer, Stage} from "react-konva"
import Parties from "../data/Parties"

/**
 * The visual representation component of parliament
 * @param {props} props
 */
function ParliamentGraphic({ callback, activeMember, members, parties }) {
  let width = 380
  let height = 400

  // Tying parties to a class
  let myParties = new Parties(parties)

  return (
    <Stage width={width} height={height}>
      <Layer>
        {generateCircles(seatingData, members, myParties, callback, activeMember)}
      </Layer>
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
  members: PropTypes.array,
  parties: PropTypes.array,
}

export default ParliamentGraphic
