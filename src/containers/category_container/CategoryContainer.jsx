import Category from "../../components/category/Category";

const renderCategory = (data, setInfo, setCategory) => {
  return data.map((info) => (
    <Category
      key={info.id}
      info={info}
      setInfo={setInfo}
      setCategory={setCategory}
    />
  ));
};

const categoryContainer = ({ category, setInfo, setCategory }) => {
  const DATA = [
    { id: 1, name: "Dewey", category },
    { id: 2, name: "Kate", category },
    { id: 3, name: "Scott", category },
  ];

  return (
    <div>
      <h2>{category}</h2>
      {renderCategory(DATA, setInfo, setCategory)}
    </div>
  );
};

export default categoryContainer;
