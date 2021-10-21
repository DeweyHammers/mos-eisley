import axios from "axios";
import images from "../../images/planets/index";

export const getPlanets = (setCategory) => {
  return async (dispatch) => {
    let url_index = 1;
    const planets = [];

    while (url_index < 7) {
      await axios
        .get(`https://swapi.dev/api/planets/?page=${url_index}`)
        .then((response) => {
          response.data.results.forEach((planet) => {
            const data = images[`${planet.name}`];
            planet.image = data.src;
            planet.id = data.id;
            planet.category = "Planets";
          });
          planets.push(response.data.results);
        });
      url_index++;
    }

    dispatch({ type: "GET_PLANETS", payload: [].concat.apply([], planets) });
    setCategory("Planets");
  };
};
