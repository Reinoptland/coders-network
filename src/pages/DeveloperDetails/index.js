import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeveloperById } from "../../store/developerDetails/actions";
import { selectDeveloperDetails } from "../../store/developerDetails/selectors";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export default function DeveloperDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const developer = useSelector(selectDeveloperDetails);

  // console.log("DEVELOPER ID", id);
  // console.log("DEVELOPER", developer);

  useEffect(() => {
    dispatch(fetchDeveloperById(id));
  }, [dispatch, id]);

  if (!developer.name) return <h1>Loading</h1>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{developer.name}</Card.Title>
        <Card.Text>{developer.intro}</Card.Text>
        {/* <Link to={`/posts/${developer.id}`}>
          <Button variant="primary">View Details</Button>
        </Link> */}
        <Card.Title>Posts</Card.Title>
        <ListGroup>
          {developer.posts.map(post => {
            return (
              <ListGroup.Item key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
