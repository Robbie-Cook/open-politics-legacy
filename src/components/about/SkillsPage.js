import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Colors from "../../data/Colors";
import { ButtonWrapper } from "../Button";
import Spacer from "../Spacer";
import { Heading } from "../Typography";
import { MobileView } from "../Views";

/** A component which defines the SkillBoxes */
class SkillsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSkillsPage: 0,
    }
  }

  FirstSkillsPage = {
    backgroundColor: "#43DE49",
    index: 0,
    content: <></>,
  }

  SecondSkillsPage = {
    backgroundColor: "#c98a2c",
    index: 1,
  }

  toggleSkillsPage() {
    let newPageIndex =
      this.state.activeSkillsPage === this.FirstSkillsPage.index
        ? this.SecondSkillsPage.index
        : this.FirstSkillsPage.index
    this.setState({ activeSkillsPage: newPageIndex })
  }

  render() {
    const SkillsBoxWrapper = styled.div``

    const CustomWrapper = styled.div`
      display: flex;
      flex-direction: row;
    `

    const PreTransformWrapper = styled.div`
      padding-left: 22px;
      width: 56px;
      ${new MobileView("display: none")};
    `

    this.FirstSkillsPage.content = (
      <SkillsBoxWrapper>
        <SkillsBox
          title="Web Development"
          tags={["JavaScript", "React", "Gatsby", "VS Code", "UI Frameworks"]}
          backgroundColor={this.FirstSkillsPage.backgroundColor}
          titleColor="#0f0f0f"
        />

        <SkillsBox
          title="Microsoft Development"
          tags={["C#", "VB.NET", "MS-SQL & SSMS"]}
          backgroundColor={this.FirstSkillsPage.backgroundColor}
          titleColor="#0f0f0f"
        />

        <SkillsBox
          title="Coding Languages"
          tags={["JavaScript", "Python", "C#", "VB.NET", "Java"]}
          backgroundColor={this.FirstSkillsPage.backgroundColor}
          titleColor="#0f0f0f"
        />

        <SkillsBox
          title="Other"
          tags={["bash", "Virtualisation (Hyper-V)", "LaTeX"]}
          backgroundColor={this.FirstSkillsPage.backgroundColor}
          titleColor="#0f0f0f"
        />
      </SkillsBoxWrapper>
    )

    this.SecondSkillsPage.content = (
      <SkillsBoxWrapper>
        <SkillsBox
          title="Teaching"
          tags={["Experience in tutoring and study"]}
          backgroundColor={this.SecondSkillsPage.backgroundColor}
          titleColor="#0f0f0f"
        />
        <SkillsBox
          title="Communication"
          tags={["Experience working in team environments, and managing teams"]}
          backgroundColor={this.SecondSkillsPage.backgroundColor}
          titleColor="#0f0f0f"
        />
      </SkillsBoxWrapper>
    )

    const ColumnWrapper = styled.div`
      display: flex;
      flex-direction: column;
      
      ${new MobileView("width: 100%")};
    `

    return (
      <CustomWrapper>
        <PreTransformWrapper>
          <ButtonWrapper
            style={`
            transform: rotate(270deg); 
            height: max-content;
            transform-origin: 9px 9px;
            width: 60px;
            bottom: -320px;
            left: 17px;
            position: relative;
            transform-origin: bottom left;
            `}
          >
            <MyRadioButton
              label="General"
              function={() => {
                this.setState({ activeSkillsPage: this.SecondSkillsPage.index })
              }}
              activeStyle={`background-color: ${
                this.SecondSkillsPage.backgroundColor
              }; color: ${Colors.page.backgroundColor};`}
              active={
                this.state.activeSkillsPage === this.SecondSkillsPage.index
              }
            />
            <MyRadioButton
              label="Development"
              function={() => {
                this.setState({ activeSkillsPage: this.FirstSkillsPage.index })
              }}
              active={
                this.state.activeSkillsPage === this.FirstSkillsPage.index
              } // since this is the first item
              activeStyle={`background-color: ${
                this.FirstSkillsPage.backgroundColor
              }; color: ${Colors.page.backgroundColor};`}
              activeColor={`${Colors.page.backgroundColor}`}
            />
          </ButtonWrapper>
        </PreTransformWrapper>

        <ColumnWrapper>
          {(() => {

            const SectionSpacing = "40px";
            if (this.state.activeSkillsPage === this.FirstSkillsPage.index) {
              // display first skills page first
              return [
                this.FirstSkillsPage.content,
                <Spacer height={SectionSpacing} />,
                this.SecondSkillsPage.content,
              ]
            }
            return [
              this.SecondSkillsPage.content,
              <Spacer height={SectionSpacing} />,
              this.FirstSkillsPage.content,
            ]
          })()}
        </ColumnWrapper>
      </CustomWrapper>
    )
  }
}

/** The tags of the SkillsBox, which lives inside a SkillsBox */
class SkillsBoxInfo extends Component {
  render() {
    const SkillsBoxInfo = styled.div`
      min-height: ${this.props.height};
      line-height: ${this.props.height};
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      font-weight: bold;
      font: inherit;

      ${new MobileView(`
        height: auto;
      `)}
    `

    const Tag = styled.span`
      margin: 0 14px 0 0;
      display: inline;
      min-height: ${this.props.height};
      font-family: inherit;
      font-weight: 700;
      line-height: ${this.props.height};
    `

    return (
      <SkillsBoxInfo>
        {this.props.tags.map((item, index) => {
          return (
            <Tag>
              {item}
              {/* Put a comma at the end, except for the last item */}
              {index !== this.props.tags.length - 1 ? "," : ""}
            </Tag>
          )
        })}
      </SkillsBoxInfo>
    )
  }
}
SkillsBoxInfo.propTypes = {
  tags: PropTypes.string,
  height: PropTypes.string,
}

/* A header which lives inside a SkillsBox */
class SkillsBoxHeader extends Component {
  render() {
    const SkillsBoxHead = styled.div`
      min-height: ${this.props.height};
      width: ${this.props.width};
      background-color: ${this.props.backgroundColor};
      color: ${this.props.titleColor}!important;
      display: flex;
      align-items: center;
      padding: 0 20px;
      line-height: ${this.props.height};

      ${new MobileView("width: 100%")}
    `
    return (
      <SkillsBoxHead>
        <Heading type="h3" margin="0" style={"fontWeight: 300;"}>
          {this.props.title}
        </Heading>
      </SkillsBoxHead>
    )
  }
}
SkillsBoxHeader.propTypes = {
  titleColor: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string,
}

/** Container for skills info */
class SkillsBox extends Component {
  render() {
    /* The width of the coloured sections of the skills boxes */
    const titleWidth = "380px"


    let height = this.props.height === undefined ? "50px" : this.props.height

    const SkillsBox = styled.div`
      border: 1px solid #656565;
      min-height: ${height};
      width: 100%;
      display: flex;
      ${this.props.styles};
      margin-bottom: 20px;

      ${new MobileView(`
        height: auto;
        flex-direction: column;
      `)}
    `

    return (
      <SkillsBox>
        <SkillsBoxHeader {...this.props} height={height} width={titleWidth}>
          {this.props.children}
        </SkillsBoxHeader>
        <SkillsBoxInfo {...this.props} height={height} />
      </SkillsBox>
    )
  }
}
SkillsBox.propTypes = {
  styles: PropTypes.string,
  height: PropTypes.string,
  titleColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  backgroundColor: PropTypes.string.isRequired,
}

class MyRadioButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const MyRadioButton = styled.button`
      margin: 5px 0px 5px 0;
      border-radius: 0px;
      border: 1px solid ${Colors.text.color};
      background-color: ${Colors.page.backgroundColor};
      height: 32px;
      color: ${Colors.text.color};
      ${this.props.active ? this.props.activeStyle : null};
      cursor: pointer;
      font-size: 18px;
      padding: 5px 47px;
    `
    return (
      <MyRadioButton onClick={this.props.function}>
        {this.props.label}
      </MyRadioButton>
    )
  }
}

export default SkillsPage
