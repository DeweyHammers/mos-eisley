const peopleReducers = (state = [], action) => {
  switch (action.type) {
    case "GET_PEOPLE":
      return action.payload;
    default:
      return state;
  }
};

export default peopleReducers;
