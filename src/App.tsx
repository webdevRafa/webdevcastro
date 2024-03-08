import DynamicLogo from "./Components/DynamicLogo";
import DevAndDesign from "./Components/DevAndDesign";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";

function App() {
  return (
    <>
      <Header></Header>
      <About></About>
      <div className="bg-med-dark h-[300px]"></div>
      <div className="bg-purple h-[300px]"></div>
      <div className="bg-darkpurple h-[300px]"></div>
      <div className="bg-white h-[300px]"></div>
    </>
  );
}

export default App;
