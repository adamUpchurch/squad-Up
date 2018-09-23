import React from 'react';
import CreateSquad from '../CreateSquad/CreateSquad.js';
import Header from '../Header/Header.js';
import AllocateStreams from '../AllocateStreams/AllocateStreams.js';


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
            <Header />
            <CreateSquad />
          </div>
        );
      }
  }
}

export default Squad;
