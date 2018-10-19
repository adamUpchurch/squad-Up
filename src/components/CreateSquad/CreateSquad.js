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
          <input onChange={this.handleChange} placeHolder='Twitch streamerTags' style={{position: 'relative', padding: '0', border: 'none', background: 'none', touchCallout: 'none', color: '#78e4e0', fontSize: '1.5em', borderBottom: '1px solid white', outline: 'none'}} type="text" value={this.state.value}  />
        </label>

        <input className='onHover'style={{marginLeft: '10px', backgroundColor: '#78e4e0', color: 'white', fontSize: '1.5em', borderRadius:'4px', border: 'none', padding: '7px'}} type="submit" value="Let's go! 📺"/>
      </form>
    );
  }
}

export default CreateSquad;
