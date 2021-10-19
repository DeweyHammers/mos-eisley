export const getVehicles = (setCategory) => {
  const vehicles = [
    { id: 1, name: "Dewey", category: "Vehicles" },
    { id: 2, name: "Kate", category: "Vehicles" },
    { id: 3, name: "Scott", category: "Vehicles" },
  ];

  return (dispatch) => {
    dispatch({ type: "GET_VEHICLES", payload: vehicles });
    setCategory("Vehicles");
  };
};
