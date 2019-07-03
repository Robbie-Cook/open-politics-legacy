// Root container for a page

/* Imports */
/* Stylesheets etc. */
import React, { Component } from "react"
import styled from "styled-components"
import Colors from "../data/Colors"
import NavigationBar from "./NavigationBar"
import MyLink from "./MyLink"
import MyHelmet from "./MyHelmet"
import { MobileView } from "./Views"
import Dimensions from "./Dimensions"

// Styles for component
const StyledPage = styled.div`
  background-color: ${Colors.backgroundColor};

  display: flex;
  flex-direction: column;
  padding: ${new Dimensions(40, 90, 0, 90)};

  // Mobile styles
  ${new MobileView(`
    flex-direction: column;
    padding: ${new Dimensions(20, 30)}; 
  `)}
`

/* Navigation links, which are passed to navbar.js */


/**
 * Define a React Context for all child components to use
 * Made to make finding colors easier
 */
const ColorsContext = React.createContext(Colors)

// Main Page component
class WebPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ColorsContext.Provider value={Colors}>
        <MyHelmet /> {/* SEO Stuff */}
        <div>
          <NavigationBar />
          <div style={this.props.style}>
            <StyledPage style={this.props.style}>
              {this.props.children}
            </StyledPage>
          </div>
        </div>
      </ColorsContext.Provider>
    )
  }
}

export default WebPage
