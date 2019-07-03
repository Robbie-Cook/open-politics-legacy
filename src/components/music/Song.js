import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Colors from "../../data/Colors";

/**
 * Represents a track UI on the page
 */
class Song extends Component {
  constructor(props) {
    super(props)
    this.state = { spotifyActive: false }
  }


  render() {
    const artistNameColor = Colors.page.secondaryColor;

    const SongWrapper = styled.div`
      display: flex;
      flex-direction: column;
    `

    const SongIcon = styled.div`
      width: 36px;
      margin-right: 15px;
      cursor: pointer;

      &:hover {
        color: 
      }
    `

    const SongName = styled.span`
      display: flex;
      align-items: center;
      margin-right: 10px;
      font-size: 1.25em;
    `

    const ArtistName = styled.span`
      display: flex;
      align-items: center;
      color: ${artistNameColor};
      font-size: 11pt;
    `

    const Line1 = styled.div`
      display: flex;
      flex-direction: row;
    `

    const SpotifyWrapper = styled.div`
      height: ${this.state.spotifyActive ? "80px" : "0"};
      overflow: hidden;

      & div:empty {
        background-color: orange;
      }
    `

    return (
      <SongWrapper
        onClick={() => {
          this.setState({ spotifyActive: !this.state.spotifyActive })
        }}
      >
        <Line1>
          <SongIcon><i class="fas fa-chevron-down"></i></SongIcon>
          <SongName>{this.props.name}</SongName>
          <ArtistName>{this.props.artist}</ArtistName>
        </Line1>
      </SongWrapper>
    )
  }
}
Song.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string,
  spotifySongId: PropTypes.string,
}

export default Song
