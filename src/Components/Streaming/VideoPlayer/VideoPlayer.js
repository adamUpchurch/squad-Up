import React from 'react';

class VideoPlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gamerSrc: `http://player.twitch.tv/?channel=${props.streamerTag}&muted=true`,
    }
  };


  render() {
    return (
<<<<<<< HEAD:src/components/VideoPlayer/VideoPlayer.js
      <div className = "d-flex">
        {<div className = "col-md-6 flex-fill embed-responsive embed-responsive-16by9">
||||||| merged common ancestors
      <div className = "d-flex bd-highlight">
        {<div className = "col-md-6 flex-fill embed-responsive embed-responsive-16by9">
=======

>>>>>>> handleMultipleStreamer:src/Components/Streaming/VideoPlayer/VideoPlayer.js
            <iframe
              className="streamPlayer"
              src={this.state.gamerSrc}
              scrolling="no"
              frameborder="0"
              marginHeight='0'
              border='0'
              allowFullScreen="true"
              style={{justifySelf: 'center'}}
              >
            </iframe>
    )
  }
}

export default VideoPlayer;
