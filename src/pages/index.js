import React from "react";
import { BorderBox } from "../components/Boxes";
import { Col, LayoutWrapper, Row } from "../components/Layout";
import WebPage from "../components/Page";
import MemberPage from "../components/politics/MemberPage";
import ParliamentGraphic from "../components/politics/ParliamentGraphic";
import { Heading } from "../components/typography";

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
