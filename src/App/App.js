import React, { Component } from 'react';
import './App.css';
import Streaming from '../Components/Streaming/Streaming.js'
import HomePage from '../Components/HomePage/HomePage.js'
// import Snowflakes from '../Components/Snowflake/Snowflake.js'

class App extends Component {
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
      if (params.has('streamers')) {
        return <Streaming />;
      } else {
        return <HomePage />;
      }
  }
}

export default App;
