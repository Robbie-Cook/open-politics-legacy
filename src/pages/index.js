import React, { useState } from "react"
import { Heading } from "../components/typography"
import { Col, Row, LayoutWrapper } from "../components/Layout"
import WebPage from "../components/Page"
import { BorderBox } from "../components/Boxes"
import ParliamentGraphic from "../components/politics/ParliamentGraphic"
import MemberPage from "../components/politics/MemberPage"

// Main Page component
class Index extends Component {
  render() {
    return (
      <WebPage>
        
        <LayoutWrapper>
          <Heading type="h1" center>Parliament</Heading>
          <Row>
            <Col><BorderBox><ParliamentGraphic></ParliamentGraphic></BorderBox></Col>
            <Col><BorderBox>Hi</BorderBox></Col>
          </Row>
        </LayoutWrapper>
      </WebPage>
    )
  }
}

export default Index
