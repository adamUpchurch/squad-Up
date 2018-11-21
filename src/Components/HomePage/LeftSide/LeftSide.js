import React, { Component } from 'react';
import CreateSquad from './CreateSquad.js';

const wrap = {
  display: 'grid',
  gridTemplateRows: 'repeat(2, fr)',
  gridGap: '3px',
  gridColumn: 'col / span 2',
  gridRow: 'row 2',
  justifyContent: 'center',
  alignItems: 'center'
};

const WhatToDoStyle = {
  textAlign: 'center'
}

function WhatToDo() {
  return <h2 style={WhatToDoStyle}>Trying to create a dope streaming experience</h2>
}

class LeftSide extends Component {

  render() {
    return (

      <div>
        <div style={wrap}>
          <WhatToDo/>
          <CreateSquad/>
        </div>
      </div>
    );
  }
}

export default LeftSide;
