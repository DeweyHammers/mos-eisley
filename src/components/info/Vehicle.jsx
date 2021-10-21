const Vehicle = ({ vehicle, setInfo, setCategory }) => {
  const handleClickBack = () => {
    setInfo(null);
    setCategory(vehicle.category);
  };

  return (
    <div>
      <img src={vehicle.image} alt={vehicle.name} />
      <h1>{vehicle.name}</h1>
      <button onClick={() => handleClickBack()}>
        Back to {vehicle.category}
      </button>
    </div>
  );
};

export default Vehicle;
