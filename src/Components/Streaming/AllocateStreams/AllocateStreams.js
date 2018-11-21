import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer.js';

{/*'repeat(2, 1fr) / repeat(2, 1fr)'*/}
const wrapper = {
  border: '1px solid white',
  minHeight: '100vh',
  display: 'grid-inline',
  gridGap:'5px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(168px, 1fr))',
  gridTemplateRows: 'repeat(auto-fit, minmax(280px, 1fr))',
  justifyItems: 'center'
};

class AllocateStreams extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: new URL(window.location.href),
      streamers: ['Symfuhny', 'Monstercat', 'KamoLRF', 'pokimane']
    }
  };

  render() {

    // Create an array of streamer names
    let gamers = (this.state.url.searchParams.get("key"));
    let gamerList = gamers.split(" ")

    console.log(this.state.streamers);

    return (
      <div style={wrapper} className='streamPlayerWrapper'>
          {
          gamerList.map((streamer, index) => (
            <VideoPlayer streamerTag={streamer} />
          ))
          }
      </div>
    )
  }
}

export default AllocateStreams;
