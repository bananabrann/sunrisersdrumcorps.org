import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Schedule from "../Schedule/Schedule";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home />;
            }}
          />

          <Route
            exact
            path="/schedule"
            render={() => {
              return <Schedule />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
