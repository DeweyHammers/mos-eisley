import Categories from "../../components/categories/Categories";

const CATEGORIES = [
  "Planets",
  "Starships",
  "Vehicles",
  "People",
  "Films",
  "Species",
];

const renderCategories = (setCategory) => {
  return CATEGORIES.map((category) => (
    <Categories key={category} category={category} setCategory={setCategory} />
  ));
};

const CategoriesContainer = ({ setCategory }) => {
  return <div>{renderCategories(setCategory)}</div>;
};

export default CategoriesContainer;
