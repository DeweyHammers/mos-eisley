const planetsRenderer = (state = [], action) => {
  switch (action.type) {
    case "GET_PLANETS":
      return action.payload;
    default:
      return state;
  }
};

export default planetsRenderer;
