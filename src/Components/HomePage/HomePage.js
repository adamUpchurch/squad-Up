import React, { Component } from 'react';
//TODO: Build CreateSquad, NavBar & VideoPlayer
// TODO: Embed Chat in a pop-out extension: https://dev.twitch.tv/docs/embed/chat/

import LeftSide from './LeftSide/LeftSide.js';
import Header from './Header.js';

const wrapper = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gridTemplateRows: 'auto',
  justifyContent: 'center',
  alignItems: 'center'
};

const header = {
  fontWeight: '600',
  fontSize: '1.5em',
  color: 'white',
  textAlign: 'center'
};


const spanAcross = {
    gridColumn: '1 / -1',
};

function Giphy() {
  return (
      <img src="https://66.media.tumblr.com/57e851a743d6183b3fc3001b0be64e33/tumblr_npoyawibvr1tlr5k9o1_1280.gif" className='giphyStyle'></img>
  );
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header style={header}/>
        <div style={wrapper}>
          <LeftSide />
          <Giphy />
        </div>
      </div>
    );
  }
}

export default HomePage;
