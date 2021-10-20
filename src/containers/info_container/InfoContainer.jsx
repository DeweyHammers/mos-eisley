import Person from "../../components/info/Person";

const InfoContainer = ({ info, setInfo, setCategory }) => {
  const renderInfo = () => {
    switch (info.category) {
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
