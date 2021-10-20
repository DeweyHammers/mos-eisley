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
          response.data.results.map((starship) => {
            starship.category = "Starships";
            return images.map(
              (image) =>
                image.title === starship.name &&
                ((starship.image = image.src), (starship.id = image.id))
            );
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
