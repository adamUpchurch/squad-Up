import React from 'react';
import CreateSquad from '../CreateSquad/CreateSquad.js';
import Header from '../Header/Header.js';
import AllocateStreams from '../AllocateStreams/AllocateStreams.js';


const giphyStyle = {
  width: '440px',
  height: '440px',
  left: '0px',
  top: '0px',
};



class Squad extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: new URL(window.location.href),

    }
  };


  render() {
      // Creates params to later test if streamer request is in url
      let params = new URLSearchParams(this.state.url.search.slice(1));

      // Determines if stream is requested,
      if (params.has('key')) {
        return (
          <div className="container">
            <div className="row no-gutters mh-50">
              <AllocateStreams />
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div>
              <Header />
              <div classaName="section group">
              	<div className="col span_1_of_2">
                  <div className='createSquadStyle'>
                    <h5>Trying to create a dope streaming experience</h5>
                    <h3>Multi-Streaming: Enter up to 4 streamers</h3>
                    <CreateSquad />
                  </div>
                </div>
                <div className = 'col span_1_of_2'>
                  <img src="https://66.media.tumblr.com/57e851a743d6183b3fc3001b0be64e33/tumblr_npoyawibvr1tlr5k9o1_1280.gif" style={giphyStyle}>
                  </img>
                </div>
              </div>
            </div>
          </div>
        );
      }
  }
}

export default Squad;
