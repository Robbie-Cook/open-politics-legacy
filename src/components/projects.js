import { Github, Link as GrommetLink } from "grommet-icons";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { Button, ButtonWrapper } from "../components/Button";
/* Theme */
import Colors from "../data/Colors";
import { MobileView } from "./Views";

/*
Component representing a project

Example usage:
<ProjectBox title="My title">
    <Icon />
    <p>My description</p>
    <ProjectLink to="mypage.html" text="Check out my page">
        <Icon />
    </ProjectLink>
</ProjectBox>
*/
class ProjectBox extends Component {
  render() {
    // Extra padding is for position: absolute buttons
    const ProjectBox = styled.div`
      border: 2px solid #dcd6ce;
      border-radius: 5px;
      padding: 20px 20px 20px 20px;
      background-color: #3c3c3c;
      width: 550px;
      margin-top: 10px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      position: relative;

      margin-right: 31px;

      // Responsive design queries
      @media (max-width: 1200px) {
        margin-right: 0 !important;
        width: auto;
      }

      ${new MobileView(`
        padding-bottom: 20px;
      `)}
    `

    const ProjectDescriptionAndImageWrapper = styled.div`
      display: flex;

      // Responsive design queries
      @media (max-width: 600px) {
        flex-direction: column;
      }
    `

    const ProjectTitle = styled.h3`
      margin-top: 0;
      margin-bottom: 0;
    `
    const ProjectDescription = styled.p`
      max-width: 360px;
      margin-right: 20px !important;
    `

    const ProjectImage = styled.div`
      width: auto;
      height: auto;

      & img {
        max-height: 113px;
      }
    `

    const LinkWrapper = styled.div`
      margin-top: auto;
    `

    // Style for the project buttons
    const buttonStyle = `
      margin: 20px 20px 0px 0px;
    `
    return (
      <ProjectBox>
        <ProjectTitle>{this.props.title}</ProjectTitle>
        <ProjectDescriptionAndImageWrapper>
          <ProjectDescription>{this.props.desc}</ProjectDescription>
          <ProjectImage>
            <img src={this.props.image} />
          </ProjectImage>
        </ProjectDescriptionAndImageWrapper>
        <ButtonWrapper style={`
          margin-top: auto;
          bottom: 10px;
          ${new MobileView(`
            position: relative;
            margin-top: 23px;
            display: flex;
            flex-wrap: wrap;
          `)}
        `}>
          {(() => {
            if (this.props.githubLink !== undefined) {
              return (
                <ProjectGithubLink
                  to={this.props.githubLink}
                  style={buttonStyle}
                />
              )
            }
          })()}
          {(() => {
            if (this.props.webLink !== undefined) {
              return (
                <ProjectWebLink
                  to={this.props.webLink[0]}
                  label={this.props.webLink[1]}
                  style={buttonStyle}
                />
              )
            }
          })()}
        </ButtonWrapper>
      </ProjectBox>
    )
  }
}
ProjectBox.propTypes = {
  githubLink: PropTypes.string,
  webLink: PropTypes.string,
}

// Links which sit at the bottom of a project.
// Can be used to make a custom link, or is extended below for
// simple Github and web links

// To be replaced by <Button />
class ProjectButton extends Component {
  render() {
    //   Original color: #6a77ec
    const ProjectLinkWrapper = styled.div`
      border: 3px solid ${Colors.link.color};
      border-radius: 6px;
      display: inline-block;
      padding: 5px;
      margin-right: 10px;
      margin-top: 5px;
      color: ${Colors.text.color};
      transition: 0.03s;

      /* for svg icons */
      fill: ${Colors.text.color};
      stroke: ${Colors.text.color};

      & p {
        color: inherit;
        margin: 0 10px;
        text-decoration: none;
        border-bottom: 1px solid ${Colors.text.color};
      }

      &:hover {
        & p {
          border-bottom: 1px solid transparent;
        }
        background-color: ${Colors.link.color};
      }
    `
    const InnerWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 27px;
    `
    return (
      <a href={this.props.to}>
        <ProjectLinkWrapper>
          <InnerWrapper>
            {this.props.children} {/* Should be an icon or something similar*/}
            <p>{this.props.text}</p>
          </InnerWrapper>
        </ProjectLinkWrapper>
      </a>
    )
  }
}

// Github link which extends ProjectLink
class ProjectGithubLink extends Component {
  render() {
    return (
      <Button
        icon={<Github fill="inherit" color="inherit" />}
        to={this.props.to}
        label="Code"
        {...this.props}
      />
    )
  }
}

// Web link which extends ProjectLink
class ProjectWebLink extends Component {
  render() {
    return (
      <Button
        icon={<GrommetLink stroke="inherit" color="inherit" />}
        to={this.props.to}
        label={this.props.text}
        {...this.props}
      />
    )
  }
}

export { ProjectBox, ProjectButton, ProjectGithubLink, ProjectWebLink };

