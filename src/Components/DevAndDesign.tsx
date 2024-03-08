import { useEffect } from "react";
import dd from "../assets/developer-and-designer.svg";

const DevAndDesign = () => {
  useEffect(() => {
    const handleScroll = () => {
      const dev = document.getElementById("devDes");
      if (dev) {
        const newScale = calculateScale();
        dev.style.transform = `scale(${newScale})`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateScale = () => {
    const scrollY = window.scrollY;
    let minScale = 0.3; // Start scaling at 0.5, for example
    let scaleIncrease = scrollY / 2200; // The rate at which the scale increases per pixel scrolled

    // Calculate the new scale, starting from minScale and increasing based on scroll
    let scale = minScale + scaleIncrease;

    // Optionally, you can limit the maximum scale to prevent it from growing too large
    // For example, to keep the maximum scale at 1, you can use:
    // scale = Math.min(scale, 1);

    return scale;
  };
  return (
    <>
      <img id="devDes" src={dd} alt="" />

      <div className=" w-full getdark h-[300px]"></div>
      <div className=" w-full dark h-[600px]"></div>
    </>
  );
};

export default DevAndDesign;
