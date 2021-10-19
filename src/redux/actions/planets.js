export const getPlanets = (setCategory) => {
  const planets = [
    { id: 1, name: "Dewey", category: "Planets" },
    { id: 2, name: "Kate", category: "Planets" },
    { id: 3, name: "Scott", category: "Planets" },
  ];

  return (dispatch) => {
    dispatch({ type: "GET_PLANETS", payload: planets });
    setCategory("Planets");
  };
};
