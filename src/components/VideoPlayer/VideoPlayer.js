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
<<<<<<< HEAD
              height='450'
              width='800'
              frameborder="0"
              marginHeight='0'
||||||| merged common ancestors
              height="450"
              width="800"
              padding='0'
=======
              height="50%"
              frameborder="0"
              marginHeight='0'
>>>>>>> 566bd461778735e47c518a1a38b072faf3b34bd2
              border='0'
              margin='0'
              allowFullScreen="true"
              >
            </iframe>
          </div>}
      </div>
    )
  }
}

export default VideoPlayer;
