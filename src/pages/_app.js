import React from 'react';
import App, { Container } from 'next/app';
import { ThemeContext, DefaultTheme } from "@robbie-cook/react-components"
import MyTheme from "../components/theme/MyTheme"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeContext.Provider value={MyTheme}>
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </Container>
    );
  }
}

export default MyApp;