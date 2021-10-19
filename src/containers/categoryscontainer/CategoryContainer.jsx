import Category from "../../components/category/Category";

const CATEGORIES = [
  "Planets",
  "Spaceships",
  "Vehicles",
  "People",
  "Films",
  "Species",
];

const renderCategories = () => {
  return CATEGORIES.map((category) => <Category category={category} />);
};

const CategoryContainer = () => {
  return <div>{renderCategories()}</div>;
};

export default CategoryContainer;
