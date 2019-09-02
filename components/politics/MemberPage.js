import React, { useEffect, useState } from "react"
import PropTypes, { object } from "prop-types"
import styled from "styled-components"
import { Transition } from "@robbie-cook/react-components"
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
function MemberPage({memberId}) {
  const [loading, setLoading] = useState(true)
  const [member, setMember] = useState({id: "-1", name: "Member name", description: "my description"})

  useEffect(() => {
    fetchMember(memberId)
  }, [])

  const fetchMember = (id) => {
    console.log(fetch(`api.robbie.pw/members/${id}`))
    setLoading(false)
  }

  return (
    <Transition show={true} spinner={true}>
      <MemberPageWrapper>
        <BorderBox
          style={`
          border: 4px solid ${Colors.text.color}; 
          width: fit-content;
        `}
        >
          {member.image ? (
            <StyledMemberImage src={member.image} />
          ) : (
            <StyledFontAwesomeIcon icon={faUserCircle} />
          )}
        </BorderBox>
        <Heading type="h2" noMargin>
          {member.name}
        </Heading>
        <Description>{member.description}</Description>
      </MemberPageWrapper>
    </Transition>
  )
}
MemberPage.propTypes = {
  memberId: -1,
}
MemberPage.defaultProps = {}

export default MemberPage
