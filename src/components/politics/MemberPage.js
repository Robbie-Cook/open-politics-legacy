import React, { Component } from "react"
import PropTypes, { object } from "prop-types"
import styled from "styled-components"
import TransitionWrapper from "../animation/TransitionWrapper"
import { BorderBox } from "../Boxes"
import Colors from "../Colors"
import { Heading, Text } from "../typography"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons"

const StyledMemberImage = styled.img``

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${Colors.text.color};
  font-size: 53px;
`

const Description = styled(Text)``

const MemberPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// Sample component
function MemberPage(props) {
  return (
    <MemberPageWrapper>
      <BorderBox
        style={`
          border: 4px solid ${Colors.text.color}; 
          width: fit-content;
        `}
      >
        {props.memberImage ? (
          <StyledMemberImage src={props.memberImage} />
        ) : (
          <StyledFontAwesomeIcon icon={faUserCircle} />
        )}
      </BorderBox>
      <Heading type="h2" noMargin>
        {props.memberName}
      </Heading>
      <Description>{props.memberDescription}</Description>
    </MemberPageWrapper>
  )
}
MemberPage.propTypes = {
  memberImage: PropTypes.object,
  memberName: PropTypes.string,
  memberDescription: PropTypes.string,
}
MemberPage.defaultProps = {
  memberImage: null,
  memberName: "Jim Bob",
  memberDescription:
    "Jim Bob is a valued MP from deep in the 'naki. \
    His interests are farming, shooting, and dungeons and dragons.",
}

export default MemberPage
