import axios from "axios";
import images from "../../images/films/images";

export const getFilms = (setCategory) => {
  return async (dispatch) => {
    const films = [];

    await axios.get("https://swapi.dev/api/films").then((response) => {
      response.data.results.map((film) => {
        film.category = "Films";
        return images.map(
          (image) =>
            image.title === film.title &&
            ((film.image = image.src), (film.id = image.id))
        );
      });
      films.push(response.data.results);
    });

    dispatch({ type: "GET_FILMS", payload: [].concat.apply([], films) });
    setCategory("Films");
  };
};
