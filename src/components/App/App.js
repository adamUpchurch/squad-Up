import React, { Component } from 'react';
import './App.css';
import CreateSquad from '../CreateSquad/CreateSquad.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Squad Up</h1>
        </header>
        <CreateSquad />
      </div>
    );
  }
}

export default App;
