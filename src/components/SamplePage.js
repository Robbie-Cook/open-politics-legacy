import React, { Component } from "react"
import WebPage from "../components/Page"
import { Heading } from "./typography"
import { Col, Row, LayoutWrapper } from "../components/Layout"

// Main Page component
export default function Sample(props) {
  return (
    <WebPage>
      <LayoutWrapper>
        <Heading type="h1">Sample</Heading>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </LayoutWrapper>
    </WebPage>
  )
}
