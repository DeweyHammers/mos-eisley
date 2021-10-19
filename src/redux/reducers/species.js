const speciesRenderer = (state = [], action) => {
  switch (action.type) {
    case "GET_SPECIES":
      return action.payload;
    default:
      return state;
  }
};

export default speciesRenderer;
