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
<<<<<<< HEAD
          <input onChange={this.handleChange} placeHolder='Twitch streamerTags' style={{position: 'relative', padding: '0', border: 'none', background: 'none', touchCallout: 'none', color: '#78e4e0', fontSize: '1.5em', borderBottom: '1px solid white', outline: 'none'}} type="text" value={this.state.value}  />
||||||| merged common ancestors
          <input onChange={this.handleChange} placeHolder='Twitch streamerTag' style={{position: 'relative', padding: '0', border: '0', background: 'none', tapHighlightColor: 'rgba(0,0,0,0)',
  touchCallout: 'none', color: '#78e4e0', fontSize: '1.5em'}}type="text" value={this.state.value}  />
=======
          <input onChange={this.handleChange} placeHolder='Twitch streamerTag' style={{position: 'relative', padding: '0', border: '0', background: 'none', tapHighlightColor: 'rgba(0,0,0,0)', touchCallout: 'none', color: '#78e4e0', fontSize: '1.5em'}}type="text" value={this.state.value}  />
>>>>>>> 566bd461778735e47c518a1a38b072faf3b34bd2
        </label>
<<<<<<< HEAD

        <input className='onHover'style={{marginLeft: '10px', backgroundColor: '#78e4e0', color: 'white', fontSize: '1.5em', borderRadius:'4px', border: 'none', padding: '7px'}} type="submit" value="Let's go! 📺"/>
||||||| merged common ancestors
        <input style={{marginLeft: '10px', backgroundColor: '#363A3D', color: '#78e4e0', fontSize: '1.5em'}} type="submit" value="Let's go"/>
=======
        
        <input style={{marginLeft: '10px', backgroundColor: '#363A3D', color: '#78e4e0', fontSize: '1.5em'}} type="submit" value="Let's go"/>
>>>>>>> 566bd461778735e47c518a1a38b072faf3b34bd2
      </form>
    );
  }
}

export default CreateSquad;
