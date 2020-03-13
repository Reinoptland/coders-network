import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postCommentThunk } from "../../store/posts/actions";
import { useDispatch } from "react-redux";

export default function CommentForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(text);
    dispatch(postCommentThunk(text));
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
