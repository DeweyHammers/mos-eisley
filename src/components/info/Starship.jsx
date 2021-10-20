const Starship = ({ starship, setInfo, setCategory }) => {
  const handleClickBack = () => {
    setInfo(null);
    setCategory(starship.category);
  };

  return (
    <div>
      <img src={starship.image} alt={starship.name} />
      <h1>{starship.name}</h1>
      <button onClick={() => handleClickBack()}>
        Back to {starship.category}
      </button>
    </div>
  );
};

export default Starship;
