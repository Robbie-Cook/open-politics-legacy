/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import { ThemeContext, SiteContext, DefaultSiteContext } from "@robbie-cook/react-components"
import MyTheme from "./src/components/theme/MyTheme"
import React from "react"

/** Wrap the root element with some thicc context */
export const wrapRootElement = ({ element }) => (
  <ThemeContext.Provider value={MyTheme}>
    <SiteContext.Provider value={DefaultSiteContext}>
      {element}
    </SiteContext.Provider>
  </ThemeContext.Provider>
)