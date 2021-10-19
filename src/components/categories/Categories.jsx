import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFilms } from "../../redux/actions/films";
import { getPeople } from "../../redux/actions/people";
import { getPlanets } from "../../redux/actions/planets";
import { getSpaceships } from "../../redux/actions/spaceships";
import { getVehicles } from "../../redux/actions/vehicles";
import { getSpecies } from "../../redux/actions/species";

const Categories = ({ category, setCategory }) => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.filmsReducers);
  const people = useSelector((state) => state.peopleReducers);
  const planets = useSelector((state) => state.planetsReducers);
  const spaceships = useSelector((state) => state.spaceshipsReducers);
  const species = useSelector((state) => state.speciesReducers);
  const vehicles = useSelector((state) => state.vehiclesReducers);

  const handleClick = () => {
    switch (category) {
      case "Films":
        return films.length !== 0
          ? setCategory(category)
          : dispatch(getFilms(setCategory));
      case "People":
        return people.length !== 0
          ? setCategory(category)
          : dispatch(getPeople(setCategory));
      case "Planets":
        return planets.length !== 0
          ? setCategory(category)
          : dispatch(getPlanets(setCategory));
      case "Spaceships":
        return spaceships.length !== 0
          ? setCategory(category)
          : dispatch(getSpaceships(setCategory));
      case "Species":
        return species.length !== 0
          ? setCategory(category)
          : dispatch(getSpecies(setCategory));
      case "Vehicles":
        return vehicles.length !== 0
          ? setCategory(category)
          : dispatch(getVehicles(setCategory));
      default:
        return console.log("There was an error with setting the category");
    }
  };

  return <button onClick={() => handleClick()}>{category}</button>;
};

export default Categories;
