import Navbar from "./components/navbar/Navbar";
import CategoryContainer from "./containers/categoryscontainer/CategoryContainer";
import StarwarsContainer from "./containers/starwarscontainer/StarwarsContainer";
import StarwarsInfo from "./components/starwarsinfo/StarwarsInfo";

const App = () => {
  return (
    <div>
      <Navbar />
      <CategoryContainer />
      <StarwarsContainer />
      <StarwarsInfo />
    </div>
  );
};

export default App;
