const Specie = ({ specie, setInfo, setCategory }) => {
  const handleClickBack = () => {
    setInfo(null);
    setCategory(specie.category);
  };

  return (
    <div>
      <img src={specie.image} alt={specie.name} />
      <h1>{specie.name}</h1>
      <button onClick={() => handleClickBack()}>
        Back to {specie.category}
      </button>
    </div>
  );
};

export default Specie;
