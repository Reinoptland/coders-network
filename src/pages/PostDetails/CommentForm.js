import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CommentForm() {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(text);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          value={text}
          onChange={event => setText(event.target.value)}
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>
            <h2>Post A Comment</h2>
          </Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
