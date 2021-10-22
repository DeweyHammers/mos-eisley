import styles from "./styles";

const Person = ({ person, setInfo, setCategory }) => {
  const classes = styles;

  const handleClickBack = () => {
    setInfo(null);
    setCategory(person.category);
  };

  return (
    <div>
      <img style={classes.image} src={person.image} alt={person.name} />
      <h1>{person.name}</h1>
      <h3>Birth Year: {person.birth_year}</h3>
      <h3>Eye Color: {person.eye_color}</h3>
      <h3>Gender: {person.gender}</h3>
      <h3>Hair Color: {person.hair_color}</h3>
      <h3>Height: {person.height}</h3>
      <h3>Mass: {person.mass}</h3>
      <h3>Skin Color: {person.skin_color}</h3>
      <h3>Homeworld: Coming soon</h3>
      <h3>Species: Coming soon</h3>
      <h3>Starships: Coming soon</h3>
      <h3>Vehicles: Coming soon</h3>
      <button onClick={() => handleClickBack()}>
        Back to {person.category}
      </button>
    </div>
  );
};

export default Person;
