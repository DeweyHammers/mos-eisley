import axios from "axios";
import images from "../../images/films/images";

export const getFilms = (setCategory) => {
  return async (dispatch) => {
    const films = [];

    await axios.get("https://swapi.dev/api/films").then((response) => {
      response.data.results.forEach((film) => {
        const data = images[`${film.title}`];
        film.image = data.src;
        film.id = data.id;
        film.category = "Films";
      });
      films.push(response.data.results);
    });

    dispatch({ type: "GET_FILMS", payload: [].concat.apply([], films) });
    setCategory("Films");
  };
};
