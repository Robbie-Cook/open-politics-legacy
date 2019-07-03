import React, { Component } from 'react';
import WebPage from '../components/Page';
import { Heading } from '../components/Typography';
import { Col, Row, LayoutWrapper } from "../components/Layout"

// Main Page component
class Sample extends Component {
    render() {
      return (
  
        <WebPage>
          <LayoutWrapper>
            <Heading type="h1">Sample</Heading>
            <Row>
              <Col>
                
              </Col>
              <Col>

              </Col>
            </Row>
          </LayoutWrapper>
        </WebPage>
      );
    }
  }
  
  export default Sample;
  