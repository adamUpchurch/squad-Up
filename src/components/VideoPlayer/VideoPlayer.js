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
      <div className = "d-flex bd-highlight">
        {<div className = "col-md-6 flex-fill embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={this.state.gamerSrc}
              scrolling="no"
              height="450"
              width="800"
              padding='0'
              border='0'
              margin='0'
              allowFullScreen="false"
              >
            </iframe>
          </div>}
      </div>
    )
  }
}

export default VideoPlayer;
