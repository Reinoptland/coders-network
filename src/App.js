import React from "react";
import "./App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import PostsList from "./pages/PostsList";

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
      <PostsList />
    </div>
  );
}

export default App;
