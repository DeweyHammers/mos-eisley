const Film = ({ film, setInfo, setCategory }) => {
  const handleClickBack = () => {
    setInfo(null);
    setCategory(film.category);
  };

  return (
    <div>
      <img src={film.image} alt={film.title} />
      <h1>{film.title}</h1>
      <button onClick={() => handleClickBack()}>Back to {film.category}</button>
    </div>
  );
};

export default Film;
