import axios from "axios";
import images from "../../images/starships/images";

export const getStarships = (setCategory) => {
  return async (dispatch) => {
    let url_index = 1;
    const starships = [];

    while (url_index < 5) {
      await axios
        .get(`https://swapi.dev/api/starships/?page=${url_index}`)
        .then((response) => {
          response.data.results.forEach((starship) => {
            const data = images[`${starship.name}`];
            starship.image = data.src;
            starship.id = data.id;
            starship.category = "Starships";
          });
          starships.push(response.data.results);
        });
      url_index++;
    }

    dispatch({
      type: "GET_STARSHIPS",
      payload: [].concat.apply([], starships),
    });
    setCategory("Starships");
  };
};
