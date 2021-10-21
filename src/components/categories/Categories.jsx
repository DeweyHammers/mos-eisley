import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFilms } from "../../redux/actions/films";
import { getPeople } from "../../redux/actions/people";
import { getPlanets } from "../../redux/actions/planets";
import { getStarships } from "../../redux/actions/starships";
import { getVehicles } from "../../redux/actions/vehicles";
import { getSpecies } from "../../redux/actions/species";

const Categories = ({ category, setCategory }) => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.filmsReducers);
  const people = useSelector((state) => state.peopleReducers);
  const planets = useSelector((state) => state.planetsReducers);
  const starships = useSelector((state) => state.starshipsReducers);
  const species = useSelector((state) => state.speciesReducers);
  const vehicles = useSelector((state) => state.vehiclesReducers);

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
    <div>
      <p>___________________________</p>
      <h2>{category.title}</h2>
      <img
        style={{ width: 150, height: 150 }}
        src={category.src}
        alt={category.title}
        onClick={() => handleClick()}
      />
      <p>___________________________</p>
    </div>
  );
};

export default Categories;
