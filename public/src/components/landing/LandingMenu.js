import React, { Component } from "react";
import "./LandingMenu.css";

export class LandingMenu extends Component {
  handleAbout = () => {
    this.props.changePage("about");
  }
  render() {
    return (
      <div id="menu-section">
        <h1>Picture Gallery</h1>
        <div id="buttons">
          <button>Login</button>
          <button id="about-button" onClick={this.handleAbout}>About</button>
        </div>
      </div>
    );
  }
}

export default LandingMenu;
