const Person = ({ person, setInfo, setCategory }) => {
  const handleClickBack = () => {
    setInfo(null);
    setCategory(person.category);
  };

  return (
    <div>
      <img src={person.image} alt={person.name} />
      <h1>{person.name}</h1>
      <button onClick={() => handleClickBack()}>
        Back to {person.category}
      </button>
    </div>
  );
};

export default Person;
