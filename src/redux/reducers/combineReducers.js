import { combineReducers } from "redux";
import filmsReducers from "./films";
import peopleReducers from "./people";
import planetsReducers from "./planets";
import spaceshipsReducers from "./spaceships";
import speciesReducers from "./species";
import vehicleReducers from "./vehicles";

export default combineReducers({
  filmsReducers,
  peopleReducers,
  planetsReducers,
  spaceshipsReducers,
  speciesReducers,
  speciesReducers,
  vehicleReducers,
});
