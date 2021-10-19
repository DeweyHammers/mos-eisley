const spaceshipsRenderer = (state = [], action) => {
  switch (action.type) {
    case "GET_SPACESHIPS":
      return action.payload;
    default:
      return state;
  }
};

export default spaceshipsRenderer;
