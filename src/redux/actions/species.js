import axios from "axios";
import images from "../../images/species/images";

export const getSpecies = (setCategory) => {
  return async (dispatch) => {
    let url_index = 1;
    const species = [];

    while (url_index < 5) {
      await axios
        .get(`https://swapi.dev/api/species/?page=${url_index}`)
        .then((response) => {
          response.data.results.map((specie) => {
            specie.category = "Species";
            return images.map(
              (image) =>
                image.title === specie.name &&
                ((specie.image = image.src), (specie.id = image.id))
            );
          });
          species.push(response.data.results);
        });
      url_index++;
    }

    dispatch({ type: "GET_SPECIES", payload: [].concat.apply([], species) });
    setCategory("Species");
  };
};
