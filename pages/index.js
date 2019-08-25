import React, { useContext, useState, useEffect }  from "react"
import { BorderBox } from "../components/Boxes"
import { Col, LayoutWrapper, Row } from "../components/Layout"
import MemberPage from "../components/politics/MemberPage"
import ParliamentGraphic from "../components/politics/ParliamentGraphic"
import { Heading } from "../components/typography"
import {
  ProgressBar,
  ProgressBarSectionData,
} from "../components/ui-components/ProgressBar"
import { Page } from "@robbie-cook/react-components"

// Main Page component

export default function Index(props) {

  // Render
  return (
    <Page>
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

        <Heading type="h2">Balance of power</Heading>
        <ProgressBar />
      </LayoutWrapper>
    </Page>
  )
}
