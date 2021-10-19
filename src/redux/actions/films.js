export const getFilms = (setCategory) => {
  const films = [
    { id: 1, name: "Dewey", category: "Films" },
    { id: 2, name: "Kate", category: "Films" },
    { id: 3, name: "Scott", category: "Films" },
  ];

  return (dispatch) => {
    dispatch({ type: "GET_FILMS", payload: films });
    setCategory("Films");
  };
};
