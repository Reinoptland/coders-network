import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../store/posts/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectPostDetails } from "../../store/postDetails/selectors";
import ReactMarkdown from "react-markdown";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

export default function PostDetails() {
  // I WANT THE ID OF THIS POST
  const params = useParams();
  //   console.log(params.id);
  const dispatch = useDispatch();
  const postDetails = useSelector(selectPostDetails);
  //   console.log(postDetails);

  useEffect(() => {
    dispatch(fetchPostById(params.id));
  }, [dispatch, params.id]);

  if (!postDetails.title) return <Spinner />;

  // console.log(postDetails);
  return (
    <Container>
      <Jumbotron>
        <h1>{postDetails.title}</h1>
        <Link to={`/developers/${postDetails.developer.id}`}>
          <h3>Author: {postDetails.developer.name}</h3>
        </Link>
        {postDetails.tags.map(tag => (
          <Badge key={tag.id} className="m-1" variant="warning">
            {tag.tag}
          </Badge>
        ))}
      </Jumbotron>
      <ReactMarkdown source={postDetails.content} />
      {postDetails.comments.map(comment => {
        // console.log(comment);
        return (
          <Card key={comment.id}>
            <Card.Body>
              <Card.Title>
                <h5>{comment.developer.name} says:</h5>
              </Card.Title>
              <p>{comment.text}</p>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}
