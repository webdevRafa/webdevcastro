import { useEffect } from "react";
import castro from "../assets/webdevcastro.svg";

const DynamicLogo = () => {
  useEffect(() => {
    const handleScroll = () => {
      const castroLogo = document.getElementById("castroLogo");
      if (castroLogo) {
        const { newScale, newOpacity } = calculateTransformations();
        castroLogo.style.transform = `scale(${newScale})`;
        castroLogo.style.opacity = `${newOpacity}`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateTransformations = () => {
    const scrollY = window.scrollY;
    let newScale = 1 - scrollY / 800;
    newScale = Math.max(newScale, 0.5); // Ensure scale doesn't go below 0.5

    let newOpacity = 1 - scrollY / 150;

    return { newScale, newOpacity };
  };

  return (
    <>
      <img
        className="mt-20 mx-auto"
        src={castro}
        id="castroLogo"
        alt="Castro Logo"
      />
    </>
  );
};

export default DynamicLogo;
