import React, { Component } from "react";
import "./App.css";
import Home from "../Home/Home";
import About from "../About/About";

import { HashRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
