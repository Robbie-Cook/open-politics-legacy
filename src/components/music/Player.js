import PropTypes from "prop-types";
import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import Colors from "../../data/Colors";

/**
 * Used by Song to represent a spotify song
 */
class SpotifySong extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <iframe
        src={`https://open.spotify.com/embed/track/${this.props.spotifySongId}`}
        width="300"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    )
  }
}
SpotifySong.propTypes = {
  spotifySongId: PropTypes.string,
}

class MusicPlayer extends Component {
  render() {
    const StyledPlayer = styled.div`
      height: 64px;
      background-color: rgba(15, 15, 15, 0.97);
      width: 100%;
      position: fixed;
      left: 0;
      padding: 20px;
      border-top: 4px solid ${Colors.page.secondaryColor};
      bottom: 0;
    `

    return (
      <StyledPlayer>
        <SpotifySong spotifySongId={this.props.currentSong.spotifySongId} />
      </StyledPlayer>
    )
  }
}
MusicPlayer.propTypes = {
  currentSong: PropTypes.object, // Expecting {type: "spotify", id="1231"}
}
MusicPlayer.defaultProps = {}

export default MusicPlayer
