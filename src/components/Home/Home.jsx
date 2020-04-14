import React, { Component } from "react";
import App from "../App/App";
import Student from "../Student/Student";

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>HOME</h1>
        <Student />
      </div>
    );
  }
}

export default Home;
