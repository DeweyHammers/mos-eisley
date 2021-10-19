export const getSpecies = (setCategory) => {
  const species = [
    { id: 1, name: "Dewey", category: "Species" },
    { id: 2, name: "Kate", category: "Species" },
    { id: 3, name: "Scott", category: "Species" },
  ];

  return (dispatch) => {
    dispatch({ type: "GET_SPECIES", payload: species });
    setCategory("Species");
  };
};
