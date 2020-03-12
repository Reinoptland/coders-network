import React from "react";
import "./App.css";
import PostsList from "./pages/PostsList";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={PostsList} />
      </Switch>
    </div>
  );
}

export default App;
