import React from "react"
import { Text, Heading } from "@robbie-cook/react-components"

/**
 * Custom text to use for member page
 * @param props props
 */
function CustomText(props: any) {
  return (
    <Text style={`text-align: center;`}>
      {props.children}
    </Text>
  )
}

export default function MemberPage404() {
  return (
    <>
      <Heading type="h2" center={true}>Member not found!</Heading>
      <CustomText>Please select another member.</CustomText>
    </>
  )
}
