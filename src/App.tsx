import DynamicLogo from "./Components/DynamicLogo";
import DevAndDesign from "./Components/DevAndDesign";
import About from "./Components/About";
import "./App.css";

function App() {
  return (
    <>
      <DynamicLogo></DynamicLogo>
      <About></About>
      <DevAndDesign></DevAndDesign>
      <div className="h-[2000px]"></div>
    </>
  );
}

export default App;
