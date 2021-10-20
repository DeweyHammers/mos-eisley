import axios from "axios";
import images from "../../images/people/images";

export const getPeople = (setCategory) => {
  return async (dispatch) => {
    let url_page = 1;
    const people = [];

    while (url_page < 10) {
      await axios
        .get(`https://swapi.dev/api/people/?page=${url_page}`)
        .then((response) => {
          response.data.results.map((person) => {
            person.category = "People";
            return images.map(
              (image) =>
                image.title === person.name &&
                ((person.image = image.src), (person.id = image.id))
            );
          });
          people.push(response.data.results);
        });
      url_page++;
    }

    dispatch({ type: "GET_PEOPLE", payload: [].concat.apply([], people) });
    setCategory("People");
  };
};
