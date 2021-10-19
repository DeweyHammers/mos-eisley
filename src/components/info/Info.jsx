const Info = ({ info, setInfo, setCategory }) => {
  const handleBack = (info) => {
    setInfo(null);
    setCategory(info.category);
  };

  return (
    <div>
      <h1>{info.name}</h1>
      <button onClick={() => handleBack(info)}>Back to {info.category}</button>
    </div>
  );
};

export default Info;
