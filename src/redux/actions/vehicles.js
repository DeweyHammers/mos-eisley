import axios from "axios";
import images from "../../images/vehicles/images";

export const getVehicles = (setCategory) => {
  return async (dispatch) => {
    let url_index = 1;
    const vehicles = [];

    while (url_index < 5) {
      await axios
        .get(`https://swapi.dev/api/vehicles/?page=${url_index}`)
        .then((response) => {
          response.data.results.forEach((vehicle) => {
            const data = images[`${vehicle.name}`];
            vehicle.image = data.src;
            vehicle.id = data.id;
            vehicle.category = "Vehicles";
          });
          vehicles.push(response.data.results);
        });
      url_index++;
    }

    dispatch({ type: "GET_VEHICLES", payload: [].concat.apply([], vehicles) });
    setCategory("Vehicles");
  };
};
