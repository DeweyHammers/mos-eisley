import styles from "./styles";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Film = ({ film, setInfo, setCategory }) => {
  const classes = styles;

  const handleClickBack = () => {
    setInfo(null);
    setCategory(film.category);
  };

  return (
    <Container>
      <Row>
        <Col md={classes.col}>
          <Card bg="dark" variant="dark" style={classes.card}>
            <Card.Img style={classes.image} variant="top" src={film.image} />
            <Card.Body style={classes.text}>
              <Card.Title>{film.title}</Card.Title>
              <Card.Text>Director: {film.director}</Card.Text>
              <Card.Text>Producer: {film.producer}</Card.Text>
              <Card.Text>Release Date: {film.release_date}</Card.Text>
              <Card.Text>Episode Number: {film.episode_id}</Card.Text>
              <Card.Text>Opening Crawler: {film.opening_crawl}</Card.Text>
              <Card.Text>Characters: Coming soon</Card.Text>
              <Card.Text>Planets: Coming soon</Card.Text>
              <Card.Text>Species: Coming soon</Card.Text>
              <Card.Text>Starships: Coming soon</Card.Text>
              <Card.Text>Vehicles: Coming soon</Card.Text>
              <Button onClick={() => handleClickBack()} variant="primary">
                Back to {film.category}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Film;
