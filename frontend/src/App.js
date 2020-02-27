import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import "./App.css";
import Home from "./containers/Home";
import About from "./containers/About";
import Welcome from "./components/Welcome";
import Header from "./components/Header";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <div className="App">
          <Welcome />
          <Header />
        </div>

        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/etc">
            <h2>Not implemented yet</h2>
          </Route>
          <Route path="*">
            <h2>404 Not found</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
