import styles from "./styles";

const Planet = ({ planet, setInfo, setCategory }) => {
  const classes = styles;

  const handleClickBack = () => {
    setInfo(null);
    setCategory(planet.category);
  };

  return (
    <div>
      <img style={classes.image} src={planet.image} alt={planet.name} />
      <h1>{planet.name}</h1>
      <h3>Climate: {planet.climate}</h3>
      <h3>Diameter: {planet.diameter}</h3>
      <h3>Gravity: {planet.gravity}</h3>
      <h3>Orbital Period: {planet.orbital_period}</h3>
      <h3>Population: {planet.population}</h3>
      <h3>Rotation Period: {planet.rotation_period}</h3>
      <h3>Surface Water: {planet.surface_water}</h3>
      <h3>Terrain: {planet.terrain}</h3>
      <h3>Films: Coming soon</h3>
      <h3>Residents: Coming soon</h3>
      <button onClick={() => handleClickBack()}>
        Back to {planet.category}
      </button>
    </div>
  );
};

export default Planet;
