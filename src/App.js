import React from "react";
import "./App.css";
import PostsList from "./pages/PostsList";
import DeveloperList from "./pages/DeveloperList";
import PostDetails from "./pages/PostDetails";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={PostsList} />
        {/* /:id -> route parameter (params) */}
        <Route path="/posts/:id" component={PostDetails} />
        <Route path="/developers" component={DeveloperList} />
      </Switch>
    </div>
  );
}

export default App;
