import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

const CategoryContainer = ({ category, setInfo, setCategory }) => {
  const [data, setData] = useState([]);
  const films = useSelector((state) => state.filmsReducers);
  const people = useSelector((state) => state.peopleReducers);
  const planets = useSelector((state) => state.planetsReducers);
  const starships = useSelector((state) => state.starshipsReducers);
  const species = useSelector((state) => state.speciesReducers);
  const vehicles = useSelector((state) => state.vehiclesReducers);

  useEffect(() => {
    switch (category) {
      case "Films":
        return setData(films);
      case "People":
        return setData(people);
      case "Planets":
        return setData(planets);
      case "Starships":
        return setData(starships);
      case "Species":
        return setData(species);
      case "Vehicles":
        return setData(vehicles);
      default:
        return console.log(
          "There was an error getting the data to render category"
        );
    }
  }, [category, films, people, planets, starships, species, vehicles]);

  return (
    <div>
      <h2>{category}</h2>
      {renderCategory(data, setInfo, setCategory)}
    </div>
  );
};

export default CategoryContainer;
