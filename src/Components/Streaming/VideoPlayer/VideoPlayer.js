import React from 'react';

class VideoPlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gamerSrc: `http://player.twitch.tv/?channel=${props.streamerTag}&muted=true`,
    }
  };


  render() {
    const singleStreamerStyle = (tf) => {
      if (tf) {
        return {
          height: 'calc(100vw * .54)',
          width: '100vw'
        }
      }
    }
    return (
            <iframe
              className="streamPlayer"
              src={this.state.gamerSrc}
              scrolling="no"
              frameborder="0"
              marginHeight='0'
              border='0'
              allowFullScreen="true"
              style={singleStreamerStyle(this.props.singleGamer)}
              >
            </iframe>
    )
  }
}

export default VideoPlayer;
