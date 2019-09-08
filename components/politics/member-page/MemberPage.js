import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { BorderBox } from "../../Boxes";
import Colors from "../../Colors";
import { Heading, Text } from "../../typography";
import MemberPageImage from "./MemberPageImage";

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
export default function MemberPage({ name, description, image }) {
  return (
    <MemberPageWrapper>
      <BorderBox
        style={`
          border: 4px solid ${Colors.text.color}; 
          width: fit-content;
        `}
      >        
        {image ? (
          <MemberPageImage url={image} />
        ) : (
          <StyledFontAwesomeIcon icon={faUserCircle} />
        )}
      </BorderBox>
      <Heading type="h2" noMargin>
        {name}
      </Heading>
      <Description>{description}</Description>
    </MemberPageWrapper>
  )
}
MemberPage.defaultProps = {}
