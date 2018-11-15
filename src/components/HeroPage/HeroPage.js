import React, { Component } from 'react';

//TODO: Build CreateSquad, NavBar & VideoPlayer
// TODO: Embed Chat in a pop-out extension: https://dev.twitch.tv/docs/embed/chat/

import Squad from '../Squad/Squad.js';
import Header from '../Header/Header.js';
import CreateSquad from '../CreateSquad/CreateSquad.js';


const giphyStyle = {
  width: 'auto',
  height: '100%'
};

class HeroPage extends Component {
  render() {
    return (
      <div>

        <Header style={{width:'100%'}}/>

        <div style={{flexDirection: 'row', height: '500px', display: 'flex'}}>
          <div style={{width: '50%', height: '100%', display: 'table'}}>
            <div style={{display:'table-cell', verticalAlign: 'middle'}}>
              <div style={{margin: '0 auto'}}>
                <h5>
                  Trying to create a dope streaming experience
                </h5>
                <h3>
                  Multi-Streaming: Enter up to 4 streamers
                </h3>
                <CreateSquad />
              </div>
            </div>
          </div>
          <div style={{width: '50%', height: '100%'}}>
            <img src="https://66.media.tumblr.com/57e851a743d6183b3fc3001b0be64e33/tumblr_npoyawibvr1tlr5k9o1_1280.gif" style={giphyStyle}>
            </img>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default HeroPage;
