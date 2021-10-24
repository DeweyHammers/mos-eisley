import Categories from "../../components/categories/Categories";
import images from "../../images/categories/images";
import { Container, Row } from "react-bootstrap";

const renderCategories = (setCategory) => {
  return images.map((category) => (
    <Categories
      key={category.id}
      category={category}
      setCategory={setCategory}
    />
  ));
};

const CategoriesContainer = ({ setCategory }) => {
  return (
    <Container>
      <Row>{renderCategories(setCategory)}</Row>
    </Container>
  );
};

export default CategoriesContainer;
