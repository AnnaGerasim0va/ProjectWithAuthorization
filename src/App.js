import React, { Component } from "react";
import Authorization from "./Components/Authorization";
import { Router, Route } from "react-router-dom";
import {createBrowserHistory} from "history";
import Content from "./Components/Content";

const HISTORY = createBrowserHistory();

class App extends Component {
  componentDidMount() {
    localStorage.setItem("loginLS", "AnnaGerasimova");
    localStorage.setItem("passwordLS", "123456");
  }
  render() {
    return (
      <>
        <Router history={HISTORY}>
          <Route exact path="/" component={Authorization} />
          <Route path="/mainPage" component={Content} />
        </Router>
      </>
    );
  }
}

export default App;
