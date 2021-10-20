import axios from "axios";

export const getFilms = (setCategory) => {
  return (dispatch) => {
    axios.get("https://swapi.dev/api/films").then((response) => {
      dispatch({ type: "GET_FILMS", payload: response.data.results });
      setCategory("Films");
    });
  };
};
