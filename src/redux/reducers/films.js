const filmsRenderer = (state = [], action) => {
  switch (action.type) {
    case "GET_FILMS":
      return action.payload;
    default:
      return state;
  }
};

export default filmsRenderer;
