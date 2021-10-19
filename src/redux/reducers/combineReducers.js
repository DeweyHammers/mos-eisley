import { combineReducers } from "redux";
import filmsReducers from "./films";
import peopleReducers from "./people";
import planetsReducers from "./planets";
import spaceshipsReducers from "./spaceships";
import speciesReducers from "./species";
import vehiclesReducers from "./vehicles";

export default combineReducers({
  filmsReducers,
  peopleReducers,
  planetsReducers,
  spaceshipsReducers,
  speciesReducers,
  vehiclesReducers,
});
