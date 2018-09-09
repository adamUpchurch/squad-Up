import React from 'react';

export default class CreateSquad extends React.Component {
  handleClick = () => {
    var url;
    console.log("Let's stream!");
    url = `https://www.twitch.tv/sasquatch167`;
    window.open(url)
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        click me
      </button>
    );
  }
}
