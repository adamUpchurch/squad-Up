import React from 'react';

class VideoPlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: new URL(window.location.href),
    }
  };


  render() {
    // TODO: Query url for multiple streamer tags, put in an array, loop over array to create iframe for each streamer.

    let gamers = (this.state.url.searchParams.get("key"));
    let gamerList = gamers.split(" ")
    var streamers = []

    var i;
    for (i = 0; i < gamerList.length; i ++) {
      streamers.push(`http://player.twitch.tv/?channel=${gamerList[i]}&muted=true`)
    }

    {/* align-self-center justify-content-center the_stream */}
    return (
      <div className = "d-flex bd-highlight">
        {streamers.map((streamURL, index) => (
          <div className = "col-md-6 flex-fill embed-responsive embed-responsive-16by9">
            {/* <h5>{gamerList[index]}</h5> */}
            <iframe
              className="embed-responsive-item"
              src={streamURL}
              scrolling="no"
              height="450"
              width="800"
              allowfullscreen="false"
              id = {`streamer${index}`}
              >
            </iframe>
          </div>
        ))}
      </div>
    )
  }
}

export default VideoPlayer;
