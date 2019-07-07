// Metadata for each page

import React from "react"
import { Helmet } from "react-helmet"
import Colors from "./Colors"

function MyHelmet(props) {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        {/* Load Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap"
          rel="stylesheet"
        />

        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}

        {/* Done for initial loading */}
        <style>
          {`
              body {
                background-color: ${Colors.backgroundColor};
                margin: 0;
              }
            `}
        </style>
      </Helmet>
    </div>
  )
}
MyHelmet.defaultProps = {
  title: "Robbie Cook",
}
export default MyHelmet
