import React from 'react';
import CreateSquad from '../CreateSquad/CreateSquad.js';
import VideoPlayer from '../VideoPlayer/VideoPlayer.js';
import Header from '../Header/Header.js';


class Squad extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: new URL(window.location.href),

    }
  };


  render() {
      let url = this.state.url;

      // Creates params to later test if streamer request is in url
      let params = new URLSearchParams(url.search.slice(1));

      // Determines if stream is requested,
      if (params.has('key')) {
        return (
          <div className="container">
            <div className="row no-gutters mh-50">
              <VideoPlayer />
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <Header />
            <CreateSquad />
          </div>
        );
      }
  }
}

export default Squad;
