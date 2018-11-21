import React, { Component } from 'react';




class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
          <h1 style={this.props.style}>Squad Up</h1>
    )
  }
}

export default Header;
