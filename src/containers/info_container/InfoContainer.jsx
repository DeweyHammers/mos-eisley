import Film from "../../components/info/Film";
import Person from "../../components/info/Person";

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
      default:
        return console.log("There was a error while displaying the info");
    }
  };

  return <div>{renderInfo()}</div>;
};

export default InfoContainer;
