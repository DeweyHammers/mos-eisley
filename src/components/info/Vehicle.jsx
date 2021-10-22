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
      <h3>Cargo Capacity: {vehicle.cargo_capacity}</h3>
      <h3>Consumables: {vehicle.consumables}</h3>
      <h3>Cost in Credits: {vehicle.cost_in_credits}</h3>
      <h3>Crew: {vehicle.crew}</h3>
      <h3>Length: {vehicle.length}</h3>
      <h3>Manufacturer: {vehicle.manufacturer}</h3>
      <h3>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</h3>
      <h3>Model: {vehicle.model}</h3>
      <h3>Passengers: {vehicle.passengers}</h3>
      <h3>Vehicle Class: {vehicle.vehicle_class}</h3>
      <h3>Films: Coming soon</h3>
      <h3>Pilots: Coming soon</h3>
      <button onClick={() => handleClickBack()}>
        Back to {vehicle.category}
      </button>
      {console.log(vehicle)}
    </div>
  );
};

export default Vehicle;
