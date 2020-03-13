import React, { useEffect } from "react";
import "./App.css";
import PostsList from "./pages/PostsList";
import DeveloperList from "./pages/DeveloperList";
import DeveloperDetails from "./pages/DeveloperDetails";
import PostDetails from "./pages/PostDetails";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import { fetchOwnProfile } from "./store/user/actions";
import { useDispatch } from "react-redux";

function App() {
  // is my token still valid? if not logout
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOwnProfile());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={PostsList} />
        {/* /:id -> route parameter (params) */}
        <Route path="/posts/:id" component={PostDetails} />
        <Route exact path="/developers" component={DeveloperList} />
        <Route path="/developers/:id" component={DeveloperDetails} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
