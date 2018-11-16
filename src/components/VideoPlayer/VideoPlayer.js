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
        <div className = "col-md-6 flex-fill embed-responsive">
            <iframe
              className="embed-responsive-item streamPlayer"
              src={this.state.gamerSrc}
              scrolling="no"
              height='337'
              width='600'
              frameborder="0"
              marginHeight='0'
              border='0'
              margin='0'
              allowFullScreen="true"
              >
            </iframe>
          </div>
    )
  }
}

export default VideoPlayer;
