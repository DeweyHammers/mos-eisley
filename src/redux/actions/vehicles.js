import axios from "axios";

export const getVehicles = (setCategory) => {
  return (dispatch) => {
    axios.get("https://swapi.dev/api/vehicles").then((response) => {
      dispatch({ type: "GET_VEHICLES", payload: response.data.results });
      setCategory("Vehicles");
    });
  };
};
