import styles from "./styles";

const Starship = ({ starship, setInfo, setCategory }) => {
  const classes = styles;

  const handleClickBack = () => {
    setInfo(null);
    setCategory(starship.category);
  };

  return (
    <div>
      <img style={classes.image} src={starship.image} alt={starship.name} />
      <h1>{starship.name}</h1>
      <h3>MGLT: {starship.MGLT}</h3>
      <h3>Cargo Capacity: {starship.CargoCapacity}</h3>
      <h3>Consumables: {starship.consumables}</h3>
      <h3>Cost in Credits: {starship.cost_in_credits}</h3>
      <h3>Crew: {starship.crew}</h3>
      <h3>Hyperdrive Rating: {starship.hyperdrive_rating}</h3>
      <h3>Length: {starship.length}</h3>
      <h3>Manufacturer: {starship.manufacturer}</h3>
      <h3>Max Atmosphering Speed: {starship.max_atmosphering_speed}</h3>
      <h3>Model: {starship.model}</h3>
      <h3>Passengers: {starship.passengers}</h3>
      <h3>Starship Class: {starship.starship_class}</h3>
      <h3>Films: Coming soon</h3>
      <h3>Pilots: Coming soon</h3>
      <button onClick={() => handleClickBack()}>
        Back to {starship.category}
      </button>
    </div>
  );
};

export default Starship;
