import styles from "./styles";

const Specie = ({ specie, setInfo, setCategory }) => {
  const classes = styles;

  const handleClickBack = () => {
    setInfo(null);
    setCategory(specie.category);
  };

  return (
    <div>
      <img style={classes.image} src={specie.image} alt={specie.name} />
      <h1>{specie.name}</h1>
      <button onClick={() => handleClickBack()}>
        Back to {specie.category}
      </button>
    </div>
  );
};

export default Specie;
