const Category = ({ info, setInfo, setCategory }) => {
  const handleClick = () => {
    setInfo(info);
    setCategory(null);
  };

  return (
    <div>
      <h5>{info.name}</h5>
      <button onClick={() => handleClick()}>More info</button>
    </div>
  );
};

export default Category;
