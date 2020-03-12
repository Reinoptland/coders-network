import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function DeveloperCard(props) {
  console.log(props);
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {props.name}, github: {props.github_username}
        </Card.Title>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>
  );
}
