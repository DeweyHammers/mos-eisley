import axios from "axios";

export const getPlanets = (setCategory) => {
  return (dispatch) => {
    axios.get("https://swapi.dev/api/planets").then((response) => {
      dispatch({ type: "GET_PLANETS", payload: response.data.results });
      setCategory("Planets");
    });
  };
};
