import React from "react"
import styled from "styled-components"

const StyledMemberPageImage = styled.img`
  width: 100px;
`

export default function MemberPageImage({ url }) {
  return <StyledMemberPageImage src={url}></StyledMemberPageImage>
}
