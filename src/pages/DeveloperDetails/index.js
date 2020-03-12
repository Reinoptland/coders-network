import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeveloperById } from "../../store/developerDetails/actions";
import { selectDeveloperDetails } from "../../store/developerDetails/selectors";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function DeveloperDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const developer = useSelector(selectDeveloperDetails);

  console.log("DEVELOPER ID", id);
  console.log("DEVELOPER", developer);

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
        {developer.posts.map(post => {
          return (
            <Link to={`/posts/${post.id}`}>
              <Button variant="primary">{post.title}</Button>
            </Link>
          );
        })}
      </Card.Body>
    </Card>
  );
}
