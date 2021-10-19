import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import CategoriesContainer from "./containers/categories_container/CategoriesContainer";
import CategoryContainer from "./containers/category_container/CategoryContainer";
import Info from "./components/info/Info";

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
      return <Info info={info} setInfo={setInfo} setCategory={setCategory} />;
    } else {
      return <CategoriesContainer setCategory={setCategory} />;
    }
  };

  return (
    <div>
      <Navbar setCategory={setCategory} setInfo={setInfo} />
      {display()}
    </div>
  );
};

export default App;
