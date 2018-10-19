import React, { Component } from 'react';

class Menu extends Component {
  constructor(props){
  super(props);

  this.menuAnimation = this.menuAnimation.bind(this);
}
  // https://www.w3schools.com/howto/howto_css_menu_icon.asp
  menuAnimation(x) { x.target.classList.toggle("change");
}

  render() {
    return(
      <div id='foo' className="container" onClick={this.menuAnimation}>
        {/*// onclick={}>*/}
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    )
  }
}

export default Menu;
