import React, { Component } from "react";
import "./App.css";

import LandingPage from "./components/landing/LandingPage";
import AboutPage from "./components/about/AboutPage";

class App extends Component {
  state = {
    activePage: {
      landing: true,
      about: false
    }
  };

  changePage = pageName => { // TO REFACTOR
    if (pageName === "landing") {
      this.setState({
        activePage: {
          landing: true,
          about: false
        }
      });
    }

    else if (pageName === "about") {
      this.setState({
        activePage: {
          landing: false,
          about: true
        }
      });
    }
  };
  render() {
    return (
      <div className="App">
        {this.state.activePage.landing ? (
          <LandingPage changePage={this.changePage} />
        ) : (
          undefined
        )}
        {this.state.activePage.about ? (
          <AboutPage changePage={this.changePage} />
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default App;
