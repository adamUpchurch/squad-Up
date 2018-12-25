import React, { Component } from 'react';
//TODO: Build CreateSquad, NavBar & VideoPlayer
// TODO: Embed Chat in a pop-out extension: https://dev.twitch.tv/docs/embed/chat/

import LeftSide from './LeftSide/LeftSide.js';
import Header from './Header.js';
import Snowflakes from './Snowflake/Snowflake.js'
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

const feedbackStyle = {
  fontSize: '0.75em',
  color: 'white',
  textAlign: 'center'
}


const spanAcross = {
    gridColumn: '1 / -1',
};
//https://giphy.com/gifs/3o6fJdYXEvMa5ZmlI4/html5
function Giphy() {
  return (
      <img src="https://66.media.tumblr.com/57e851a743d6183b3fc3001b0be64e33/tumblr_npoyawibvr1tlr5k9o1_1280.gif" className='giphyStyle'></img>
  );
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <Snowflakes />
        <Header style={header}/>
        <div style={wrapper}>
          <LeftSide />
          <Giphy />
        </div>
        <p style={feedbackStyle}>Please send feedback and suggestions to <a href="mailto:adam@ausolution.com?Subject=SquadUp.gg" target="_top">adam@ausolution.com</a> -- I hope you enjoy it!</p>
      </div>
    );
  }
}

export default HomePage;
