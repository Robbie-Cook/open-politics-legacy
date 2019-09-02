import React, { useContext, useState, useEffect } from "react"
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
  const [memberId, setMemberId] = useState(-1)

  // Render
  return (
    <Page>
      <LayoutWrapper>
        <Heading type="h1" center>
          Parliament
        </Heading>
        <Row>
          <Col width="50%">
            <BorderBox style="margin: auto;">
              <ParliamentGraphic callback={setMemberId}></ParliamentGraphic>
            </BorderBox>
          </Col>
          <Col width="50%">
            <BorderBox>
              <MemberPage memberId={memberId} />
            </BorderBox>
          </Col>
        </Row>

        {/* <Heading type="h2">Balance of power</Heading>
        <ProgressBar /> */}
      </LayoutWrapper>
    </Page>
  )
}
