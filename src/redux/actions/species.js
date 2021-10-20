import axios from "axios";

export const getSpecies = (setCategory) => {
  return (dispatch) => {
    axios.get("https://swapi.dev/api/species").then((response) => {
      dispatch({ type: "GET_SPECIES", payload: response.data.results });
      setCategory("Species");
    });
  };
};
