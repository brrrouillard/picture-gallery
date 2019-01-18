import React, { Component } from "react";
import "./AboutPage.css";

export class AboutPage extends Component {
    handleHome = () => {
        this.props.changePage("landing");
    }
  render() {
    return (
      <div id="about-page">
        <div id="about-div">
          <h1>About</h1>
          <p>
            This website aims to create a sustainable community for{" "}
            <span className="bold">black and white photography</span> lovers.
          </p>
          <p>
            By allowing artists and enthusiasts to expose and explore content
            that matches their passion, it brings focus on the real thing that
            matters: <span className="bold">sharing</span>.
          </p>
          <button onClick={this.handleHome} id="home-button">&lt; Home</button>
        </div>
      </div>
    );
  }
}

export default AboutPage;
