import styles from "./styles";

const Vehicle = ({ vehicle, setInfo, setCategory }) => {
  const classes = styles;

  const handleClickBack = () => {
    setInfo(null);
    setCategory(vehicle.category);
  };

  return (
    <div>
      <img style={classes.image} src={vehicle.image} alt={vehicle.name} />
      <h1>{vehicle.name}</h1>
      <button onClick={() => handleClickBack()}>
        Back to {vehicle.category}
      </button>
    </div>
  );
};

export default Vehicle;
