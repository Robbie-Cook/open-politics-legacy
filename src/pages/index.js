import React, { useState } from "react"
import { Heading } from "../components/typography"
import { Col, Row, LayoutWrapper } from "../components/Layout"
import WebPage from "../components/Page"
import { BorderBox } from "../components/Boxes"
import ParliamentGraphic from "../components/politics/ParliamentGraphic"
import MemberPage from "../components/politics/MemberPage"

// Main Page component

export default function Index(props) {
  // Render
  return (
    <WebPage>
      <LayoutWrapper>
        <Heading type="h1" center>
          Parliament
        </Heading>
        <Row>
          <Col width="50%">
            <BorderBox style="max-width: 300px; margin: auto;">
              <ParliamentGraphic></ParliamentGraphic>
            </BorderBox>
          </Col>
          <Col width="50%">
            <BorderBox>
            	<MemberPage member={props.currentMember} />
            </BorderBox>
          </Col>
        </Row>
      </LayoutWrapper>
    </WebPage>
  )
}
