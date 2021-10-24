import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import CategoriesContainer from "./containers/categories_container/CategoriesContainer";
import CategoryContainer from "./containers/category_container/CategoryContainer";
import InfoContainer from "./containers/info_container/InfoContainer";

const App = () => {
  const [category, setCategory] = useState(null);
  const [info, setInfo] = useState(null);

  const display = () => {
    if (category) {
      return (
        <CategoryContainer
          category={category}
          setInfo={setInfo}
          setCategory={setCategory}
        />
      );
    } else if (info) {
      return (
        <InfoContainer
          info={info}
          setInfo={setInfo}
          setCategory={setCategory}
        />
      );
    } else {
      return <CategoriesContainer setCategory={setCategory} />;
    }
  };

  return (
    <div>
      <NavBar setCategory={setCategory} setInfo={setInfo} />
      {display()}
    </div>
  );
};

export default App;
