import { Card, Button } from "react-bootstrap";
import styles from "./styles";

const Category = ({ info, setInfo, setCategory }) => {
  const classes = styles;

  const handleClick = () => {
    setInfo(info);
    setCategory(null);
  };

  return (
    <Card bg="dark" variant="dark" style={classes.card}>
      <Card.Img variant="top" src={info.image} style={classes.image} />
      <Card.Body>
        <Card.Title style={classes.text}>{info.name || info.title}</Card.Title>
        <Button onClick={() => handleClick()} variant="primary">
          More info
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Category;
