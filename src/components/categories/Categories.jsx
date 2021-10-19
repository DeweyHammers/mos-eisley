const Categories = ({ category, setCategory }) => {
  return <button onClick={() => setCategory(category)}>{category}</button>;
};

export default Categories;
