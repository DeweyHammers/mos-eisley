const Category = ({ info, setInfo, setCategory }) => {
  const handleClick = () => {
    setInfo(info);
    setCategory(null);
  };

  return (
    <div>
      <img
        style={{ width: 150, height: 150 }}
        src={info.image}
        alt={info.name}
      />
      <h5>{info.name || info.title}</h5>
      <button onClick={() => handleClick()}>More info</button>
    </div>
  );
};

export default Category;
