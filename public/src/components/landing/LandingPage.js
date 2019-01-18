import React, { Component } from 'react'
import LandingMenu from './LandingMenu';
import "./LandingPage.css";

export class LandingPage extends Component {
  render() {
    return (
      <div id="landing-page">
        <LandingMenu 
        changePage={this.props.changePage}
        />
      </div>
    )
  }
}

export default LandingPage
