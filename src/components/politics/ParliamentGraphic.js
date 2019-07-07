import React, { Component, PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Firestore from "../data/Firestore"
import TransitionWrapper from "../animation/TransitionWrapper"
import MemberPage from "./MemberPage"
import Colors from "../Colors"

function Seat(props) {
  const StyledSeat = styled.div`
    width: ${props.size};
    height: ${props.size};
    background-color: ${props.color};
    border-radius: 100%;
    margin: 5px;
    flex-shrink: 0;
    position: absolute;
    bottom: ${props.position[0]}px;
    left: ${props.position[1]}px;
  `
  return <StyledSeat />
}
Seat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.number,
  position: PropTypes.arrayOf(PropTypes.number)
}
Seat.defaultProps = {
  color: Colors.text.color,
  size: "14px",
  id: 0,
  position: [0, 0]
}

// ParliamentGraphic component
class ParliamentGraphic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seatingData: null,
      membersData: null,
      partyData: null,
    }
    var db = Firestore.getDb()

    // Updating functions bound to this
    var updateSeatingData = function(data) {
      this.setState({ seatingData: data })
    }.bind(this)

    var updateMembersData = function(data) {
      this.setState({ membersData: data })
    }.bind(this)

    var updatePartyData = function(data) {
      this.setState({ partyData: data })
    }.bind(this)

    // Queries for the data
    db.collection("seats")
      .get()
      .then(querySnapshot => {
        updateSeatingData(querySnapshot)
      })

    db.collection("members")
      .get()
      .then(querySnapshot => {
        updateMembersData(querySnapshot)
      })

    db.collection("parties")
      .get()
      .then(querySnapshot => {
        updatePartyData(querySnapshot)
      })
  }

  generateSeats(seatingData) {
    if (!seatingData) {
      return
    }

    let jsxArray = []
    seatingData.docs.forEach(element =>
      jsxArray.push(<Seat id={element.id} position={element.position} />)
    )
    return jsxArray
  }

  size = "300px"
  StyledSeatWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    width: ${this.size};
    height: ${this.size};
  `

  render() {
    return (
      <TransitionWrapper loaded={this.state.seatingData ? true : false}>
        <this.StyledSeatWrapper>
          {this.generateSeats(this.state.seatingData, this.positions)}
        </this.StyledSeatWrapper>
      </TransitionWrapper>
    )
  }
}

export default ParliamentGraphic
