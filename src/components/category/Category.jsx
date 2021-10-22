import styles from "./styles";

const Category = ({ info, setInfo, setCategory }) => {
  const classes = styles;

  const handleClick = () => {
    setInfo(info);
    setCategory(null);
  };

  return (
    <div>
      <p>_____________________________________________________</p>
      <img style={classes.image} src={info.image} alt={info.name} />
      <h2>{info.name || info.title}</h2>
      <button onClick={() => handleClick()}>More info</button>
      <p>_____________________________________________________</p>
    </div>
  );
};

export default Category;
