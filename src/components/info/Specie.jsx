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
      <h3>Average Height: {specie.average_height}</h3>
      <h3>Average Lifespan: {specie.average_lifespan}</h3>
      <h3>Classification: {specie.classification}</h3>
      <h3>Designation: {specie.designation}</h3>
      <h3>Eye Colors: {specie.eye_colors}</h3>
      <h3>Hair Colors: {specie.hair_colors}</h3>
      <h3>Language: {specie.language}</h3>
      <h3>Skin Colors: {specie.skin_colors}</h3>
      <h3>Films: Coming soon</h3>
      <h3>People: Coming soon</h3>
      <button onClick={() => handleClickBack()}>
        Back to {specie.category}
      </button>
    </div>
  );
};

export default Specie;
