import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFilms } from "../../redux/actions/films";
import { getPeople } from "../../redux/actions/people";
import { getPlanets } from "../../redux/actions/planets";
import { getStarships } from "../../redux/actions/starships";
import { getVehicles } from "../../redux/actions/vehicles";
import { getSpecies } from "../../redux/actions/species";
import { Card, Button } from "react-bootstrap";
import styles from "./styles";

const Categories = ({ category, setCategory }) => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.filmsReducers);
  const people = useSelector((state) => state.peopleReducers);
  const planets = useSelector((state) => state.planetsReducers);
  const starships = useSelector((state) => state.starshipsReducers);
  const species = useSelector((state) => state.speciesReducers);
  const vehicles = useSelector((state) => state.vehiclesReducers);
  const classes = styles;

  const handleClick = () => {
    switch (category.title) {
      case "Films":
        return films.length !== 0
          ? setCategory(category.title)
          : dispatch(getFilms(setCategory));
      case "People":
        return people.length !== 0
          ? setCategory(category.title)
          : dispatch(getPeople(setCategory));
      case "Planets":
        return planets.length !== 0
          ? setCategory(category.title)
          : dispatch(getPlanets(setCategory));
      case "Starships":
        return starships.length !== 0
          ? setCategory(category.title)
          : dispatch(getStarships(setCategory));
      case "Species":
        return species.length !== 0
          ? setCategory(category.title)
          : dispatch(getSpecies(setCategory));
      case "Vehicles":
        return vehicles.length !== 0
          ? setCategory(category.title)
          : dispatch(getVehicles(setCategory));
      default:
        return console.log("There was an error with setting the category");
    }
  };

  return (
    <Card bg="dark" variant="dark" style={classes.card}>
      <Card.Img variant="top" src={category.src} style={classes.image} />
      <Card.Body>
        <Button onClick={() => handleClick()} variant="primary">
          {category.title}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Categories;
