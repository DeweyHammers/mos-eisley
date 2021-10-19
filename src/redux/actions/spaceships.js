export const getSpaceships = (setCategory) => {
  const spaceships = [
    { id: 1, name: "Dewey", category: "Spaceships" },
    { id: 2, name: "Kate", category: "Spaceships" },
    { id: 3, name: "Scott", category: "Spaceships" },
  ];

  return (dispatch) => {
    dispatch({ type: "GET_SPACESHIPS", payload: spaceships });
    setCategory("Spaceships");
  };
};
