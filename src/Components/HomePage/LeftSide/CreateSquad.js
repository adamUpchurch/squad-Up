import React, { Component } from 'react';

const submitButtonSyle = {
  marginLeft: '10px',
  backgroundColor: '#78e4e0',
  color: 'white',
  fontSize: '1.5em',
  borderRadius:'4px',
  border: 'none',
  padding: '7px',
  margin: '24px auto'

};

const sreamerInputStyle = {
  position: 'relative',
  padding: '0',
  border: 'none',
  background: 'none',
  touchCallout: 'none',
  color: '#78e4e0',
  borderBottom: '1px solid white',
  outline: 'none',
  margin: '10px'
}

const formWrapper = {
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center'
};

function Giphy() {
  return (
      <img src="https://66.media.tumblr.com/57e851a743d6183b3fc3001b0be64e33/tumblr_npoyawibvr1tlr5k9o1_1280.gif"></img>
  );
}

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
    if (this.state.value !== '') {
      this.state.url = `_It_is_time_to_Squad_Up_?key=${this.state.value}`;
      window.open(`_It_is_time_to_Squad_Up_?key=${this.state.value}`);
      event.preventDefault();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={formWrapper}>
        <label>
          <input onChange={this.handleChange} placeHolder='Enter up to 4 streamers' style={sreamerInputStyle} className = 'streamerInput' type="text" value={this.state.value}  />
        </label>

        <input className='onHover'style={submitButtonSyle} type="submit" value="Let's go! 📺"/>
      </form>
    );
  }
}

export default CreateSquad;
