import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

//TODO: Build CreateSquad, NavBar & VideoPlayer
// TODO: Embed Chat in a pop-out extension: https://dev.twitch.tv/docs/embed/chat/

import Squad from '../components/Squad/Squad.js';
//import NavBar from '../components/NavBar/NavBar.js';
//import VideoPlayer from '../components/VideoPlayer/VideoPlayer.js'

const streamer = {
  avatar:'',
  name: 'Sasquatch167',
  gameStreaming: '',
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Squad />
      </div>
    );
  }
}

export default App;

/*
examply of how to create a functional component

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

const squadLogo = () => {
  return (

  );
};

*/
