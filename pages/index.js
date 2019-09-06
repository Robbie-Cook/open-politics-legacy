import { Page } from "@robbie-cook/react-components"
import React, { useEffect, useState } from "react"
import { BorderBox } from "../components/Boxes"
import { Col, LayoutWrapper, Row } from "../components/Layout"
import MemberPage from "../components/politics/member-page/MemberPage"
import ParliamentGraphic from "../components/politics/graphics/ParliamentGraphic"
import { Heading } from "../components/typography"
import prismicConfig from "../components/politics/data/prismicConfiguration.json"
import { Link, RichText, Date } from "prismic-reactjs"
import { getPartyData } from "../components/politics/data/PartyData"
import {
  getMember,
  getMemberData,
} from "../components/politics/data/MemberData"
import DefaultMemberPage from "../components/politics/member-page/DefaultMemberPage"
import MemberPage404 from "../components/politics/member-page/MemberPage404"


/**
 * Gets the member page from the given member id
 * @param {string} memberId The member ID of the member to render
 */
function getMemberPage(members, memberId) {
  const DefaultMemberId = -1
  if (memberId === DefaultMemberId) {
    return <DefaultMemberPage />
  }
  const member = getMember(members, memberId)
  return member ? (
    <MemberPage
      name={member.name}
      description={RichText.render(member.description)}
      image={member.picture.url}
    />
  ) : (
    <MemberPage404 />
  )
}

// Main Page component
export default function Index() {
  // Data about all members
  const [members, setMembers] = useState(null)

  // Data about parties
  const [parties, setParties] = useState(null)

  // Currently selected member
  const [currentMemberId, setCurrentMemberId] = useState(-1)

  useEffect(() => {
    getMemberData(prismicConfig.endpoint).then(data => {
      setMembers(data)
    })
    getPartyData(prismicConfig.endpoint).then(mydata => {
      setParties(mydata)
    })
  }, [])

  // Render
  return (
    <Page>
      <LayoutWrapper>
        <Heading type="h1" center>
          Parliament
        </Heading>
        <Row>
          <Col width="50%">
            <BorderBox style="margin: auto;">
              <ParliamentGraphic
                callback={setCurrentMemberId}
                activeMember={currentMemberId}
                members={members}
                parties={parties}
              ></ParliamentGraphic>
            </BorderBox>
          </Col>
          <Col width="50%">
            <BorderBox>
              {members && getMemberPage(members, currentMemberId)}
            </BorderBox>
          </Col>
        </Row>

        {/* <Heading type="h2">Balance of power</Heading>
        <ProgressBar /> */}
      </LayoutWrapper>
    </Page>
  )
}
