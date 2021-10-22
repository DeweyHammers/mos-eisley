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
      <button onClick={() => handleClickBack()}>
        Back to {planet.category}
      </button>
    </div>
  );
};

export default Planet;
