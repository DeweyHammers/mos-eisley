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
          response.data.results.forEach((person) => {
            const data = images[`${person.name}`];
            person.image = data.src;
            person.id = data.id;
            person.category = "People";
          });
          people.push(response.data.results);
        });
      url_page++;
    }

    dispatch({ type: "GET_PEOPLE", payload: [].concat.apply([], people) });
    setCategory("People");
  };
};
