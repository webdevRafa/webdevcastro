import { Parallax } from "react-parallax";
import cutter from "../imgs/cutter.jpg";
const Parallaxer = () => {
  return (
    <>
      <div className="w-full h-full">
        <img src={cutter} alt="" />
      </div>
      <div className="h-[600px]"></div>
    </>
  );
};

export default Parallaxer;
