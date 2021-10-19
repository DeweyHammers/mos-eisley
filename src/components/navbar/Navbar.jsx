const Navbar = ({ setCategory, setInfo }) => {
  const handleClick = () => {
    setCategory(null);
    setInfo(null);
  };

  return (
    <div>
      <h1>
        Mos Eisley <button onClick={() => handleClick()}>Categories</button>
      </h1>
    </div>
  );
};

export default Navbar;
