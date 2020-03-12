import React from "react";
import "./App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import PostsList from "./pages/PostsList";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>
      <Switch>
        <Route path="/posts" component={PostsList} />
      </Switch>
    </div>
  );
}

export default App;
