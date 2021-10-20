const starshipsReducers = (state = [], action) => {
  switch (action.type) {
    case "GET_STARSHIPS":
      return action.payload;
    default:
      return state;
  }
};

export default starshipsReducers;
