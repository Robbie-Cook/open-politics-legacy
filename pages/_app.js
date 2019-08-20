import React from "react"
import App, { Container } from "next/app"
import { ThemeContext, SiteContext } from "@robbie-cook/react-components"
import MyTheme from "../components/context/MyTheme"
import MySiteContext from "../components/context/MySiteContext"

class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }

  //   return { pageProps }
  // }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <SiteContext.Provider value={MySiteContext}>
          <ThemeContext.Provider value={MyTheme}>
            <Component {...pageProps} />
          </ThemeContext.Provider>
        </SiteContext.Provider>
      </Container>
    )
  }
}

export default MyApp
