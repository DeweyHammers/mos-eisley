import Categories from "../../components/categories/Categories";
import images from "../../images/categories/images";

const renderCategories = (setCategory) => {
  return images.map((category) => (
    <Categories key={category} category={category} setCategory={setCategory} />
  ));
};

const CategoriesContainer = ({ setCategory }) => {
  return <div>{renderCategories(setCategory)}</div>;
};

export default CategoriesContainer;
