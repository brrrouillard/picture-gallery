import React, { Component } from "react";
import axios from "axios";
import "./LandingBackground.css";

export class LandingBackground extends Component {
    constructor(props) {
        super(props);
        this.fetchBgImg();
      }
      state = {
        backgroundURL:
          ""
      };

  fetchBgImg() {
    axios
      .get(
        "https://api.unsplash.com/photos/random?client_id=88db0ababd2035cfc23093a7aa48be11c664880976f74bdd877fe294fd4df75f"
      )
      .then(res => {
        this.setState({ backgroundURL: res.data.urls.regular });
        console.log(res);
      })
      .catch(err => console.log(err))
      .then(() => console.log(this.state.backgroundURL));
  }

  render() {
    return <img src={this.state.backgroundURL}/>;
  }
}

export default LandingBackground;
