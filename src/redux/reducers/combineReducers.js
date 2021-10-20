import { combineReducers } from "redux";
import filmsReducers from "./films";
import peopleReducers from "./people";
import planetsReducers from "./planets";
import starshipsReducers from "./starships";
import speciesReducers from "./species";
import vehiclesReducers from "./vehicles";

export default combineReducers({
  filmsReducers,
  peopleReducers,
  planetsReducers,
  starshipsReducers,
  speciesReducers,
  vehiclesReducers,
});
