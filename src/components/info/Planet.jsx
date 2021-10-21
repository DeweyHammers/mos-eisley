const Planet = ({ planet, setInfo, setCategory }) => {
  const handleClickBack = () => {
    setInfo(null);
    setCategory(planet.category);
  };

  return (
    <div>
      <img src={planet.image} alt={planet.name} />
      <h1>{planet.name}</h1>
      <button onClick={() => handleClickBack()}>
        Back to {planet.category}
      </button>
    </div>
  );
};

export default Planet;
