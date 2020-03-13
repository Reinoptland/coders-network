import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeveloperById } from "../../store/developerDetails/actions";
import { selectDeveloperDetails } from "../../store/developerDetails/selectors";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

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

  //   console.log(developer);
  return (
    <Card>
      <Card.Body>
        <Card.Title>{developer.name}</Card.Title>
        <Card.Text>
          <FaGithub /> {developer.github_username}
        </Card.Text>
        <Card.Text>{developer.intro}</Card.Text>
        <Card.Text>
          {developer.technologies.map(technology => (
            <Badge className="m-1" variant="success" key={technology.id}>
              {technology.title}
            </Badge>
          ))}
        </Card.Text>
        {developer.website ? (
          <Card.Text>
            <a href={developer.website}>Visit my Website</a>
          </Card.Text>
        ) : null}
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
