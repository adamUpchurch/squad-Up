import React, { Component } from 'react';

const submitBtn = {
  paddingLeft: '10px',
};

class CreateSquad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      url: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value != '') {
      this.state.url = `src/testStream.html?key=${this.state.value}`;
      window.open(`src/testStream.html?key=${this.state.value}`);
      event.preventDefault();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input onChange={this.handleChange} placeHolder='Twitch streamerTag' style={{position: 'relative', padding: '0', border: '0', background: 'none', tapHighlightColor: 'rgba(0,0,0,0)',
  touchCallout: 'none', color: '#78e4e0', fontSize: '1.5em'}}type="text" value={this.state.value}  />
        </label>
        <input style={{marginLeft: '10px', backgroundColor: '#363A3D', color: '#78e4e0', fontSize: '1.5em'}} type="submit" value="Let's go"/>
      </form>
    );
  }
}

export default CreateSquad;
