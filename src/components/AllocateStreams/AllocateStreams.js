import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer.js';

// Allocate stream

class AllocateStreams extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: new URL(window.location.href),
      streamers: []
    }
  };

  render() {
    // TODO: Query url for multiple streamer tags, put in an array, loop over array to create iframe for each streamer.

    // Create an array of streamer names
    let gamers = (this.state.url.searchParams.get("key"));
    let gamerList = gamers.split(" ")
    var tempStreamers = []


    //Create a nested arrays of streamers 2x2
    var i;
    for (i = 0; i < gamerList.length; i += 2) {
      var j = i + 1;
      if(i === gamerList.length - 1) {
        tempStreamers.push([gamerList[i]])
      } else {
        tempStreamers.push([gamerList[i], gamerList[j]])
      } if ( i >= 3) {
        break;
      }
    }

    console.log(tempStreamers);

    {/* align-self-center justify-content-center the_stream */}


    return (
      <div className = "d-flex bd-highlight">
        {
          tempStreamers.map((nestedArray, outterIndex) => (
            nestedArray.map((streamer, innerIndex) => (
              <div>
                <VideoPlayer streamerTag={nestedArray[innerIndex]} />
              </div>
            ))
          ))
        }
      </div>
    )
  }
}

export default AllocateStreams;
