import styles from "./styles";

const Film = ({ film, setInfo, setCategory }) => {
  const classes = styles;

  const handleClickBack = () => {
    setInfo(null);
    setCategory(film.category);
  };

  return (
    <div>
      <img style={classes.image} src={film.image} alt={film.title} />
      <h1>{film.title}</h1>
      <h3>Director: {film.director}</h3>
      <h3>Producer: {film.producer}</h3>
      <h3>Release Date: {film.release_date}</h3>
      <h3>Episode Number: {film.episode_id}</h3>
      <h3>Opening Crawler:</h3>
      <p>{film.opening_crawl}</p>
      <h3>Characters: Coming soon</h3>
      <h3>Planets: Coming soon</h3>
      <h3>Species: Coming soon</h3>
      <h3>Starships: Coming soon</h3>
      <h3>Vehicles: Coming soon</h3>
      <button onClick={() => handleClickBack()}>Back to {film.category}</button>
    </div>
  );
};

export default Film;
