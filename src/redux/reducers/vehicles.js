const vehiclesRenderer = (state = [], action) => {
  switch (action.type) {
    case "GET_VEHICLES":
      return action.payload;
    default:
      return state;
  }
};

export default vehiclesRenderer;
