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
