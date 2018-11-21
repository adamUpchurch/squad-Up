import React from 'react';
import AllocateStreams from '../AllocateStreams/AllocateStreams.js';
import HeroPage from '../HeroPage/HeroPage.js';


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
          <AllocateStreams />
        );
      } else {
        return (
          <HeroPage />
        );
      }
  }
}

export default Squad;
