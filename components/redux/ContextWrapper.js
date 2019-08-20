import React, { Component } from "react"
import PropTypes from 'prop-types'
import styled from "styled-components"
import { createStore } from 'redux'
import counter from "./reducers"

// Sample component
class ContextWrapper extends Component {
  render() {
    const store = createStore(counter);

    return (
      
    )
  }
}

export default ContextWrapper
