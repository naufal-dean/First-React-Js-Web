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

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home/:text?" component={Home} />
          <Route path="/dashboard">
            <h1>hello</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
