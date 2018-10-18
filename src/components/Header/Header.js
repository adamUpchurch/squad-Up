import React, { Component } from 'react';
import Menu from './Menu/Menu.js';

class Header extends Component {

  render() {
    return(
      <header style={{  height: '5%', padding: '1px',
        color: 'white'}}>
        <div className="row">
          <h1 style={{fontWeight: '600', fontSize: '2em'}}>Squad Up</h1>
        </div>
      </header>
    )
  }
}

export default Header;
