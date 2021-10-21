import Film from "../../components/info/Film";
import Person from "../../components/info/Person";
import Planet from "../../components/info/Planet";
import Specie from "../../components/info/Specie";
import Starship from "../../components/info/Starship";
import Vehicle from "../../components/info/Vehicle";

const InfoContainer = ({ info, setInfo, setCategory }) => {
  const renderInfo = () => {
    switch (info.category) {
      case "Films":
        return (
          <Film
            key={info.id}
            film={info}
            setInfo={setInfo}
            setCategory={setCategory}
          />
        );
      case "People":
        return (
          <Person
            key={info.id}
            person={info}
            setInfo={setInfo}
            setCategory={setCategory}
          />
        );
      case "Planets":
        return (
          <Planet
            key={info.id}
            planet={info}
            setInfo={setInfo}
            setCategory={setCategory}
          />
        );
      case "Species":
        return (
          <Specie
            key={info.id}
            specie={info}
            setInfo={setInfo}
            setCategory={setCategory}
          />
        );
      case "Starships":
        return (
          <Starship
            key={info.id}
            starship={info}
            setInfo={setInfo}
            setCategory={setCategory}
          />
        );
      case "Vehicles":
        return (
          <Vehicle
            key={info.id}
            vehicle={info}
            setInfo={setInfo}
            setCategory={setCategory}
          />
        );
      default:
        return console.log("There was a error while displaying the info");
    }
  };

  return <div>{renderInfo()}</div>;
};

export default InfoContainer;
