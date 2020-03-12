import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function DeveloperCard(props) {
  console.log("PROPS IN CARD", props);
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {props.name}, github: {props.github_username}
        </Card.Title>
        <Link to={`/developers/${props.id}`}>
          <Button variant="primary">View Profile</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
