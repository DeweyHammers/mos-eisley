export const getPeople = (setCategory) => {
  const people = [
    { id: 1, name: "Dewey", category: "People" },
    { id: 2, name: "Kate", category: "People" },
    { id: 3, name: "Scott", category: "People" },
  ];

  return (dispatch) => {
    dispatch({ type: "GET_PEOPLE", payload: people });
    setCategory("People");
  };
};
