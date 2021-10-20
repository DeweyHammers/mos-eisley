import axios from "axios";

export const getStarships = (setCategory) => {
  return (dispatch) => {
    axios.get("https://swapi.dev/api/starships").then((response) => {
      dispatch({ type: "GET_STARSHIPS", payload: response.data.results });
      setCategory("Starships");
    });
  };
};
