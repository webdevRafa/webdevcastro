import { Parallax } from "react-parallax";
import barbershop from "../imgs/barbershop.jpg";
import DynamicLogo from "./DynamicLogo";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const bgImg = document.getElementById("raves");
      if (bgImg) {
        const newOpacity = calculateOpacity();
        bgImg.style.opacity = `${newOpacity}`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateOpacity = () => {
    const scrollY = window.scrollY;
    let newOpacity = 1 - scrollY / 400;
    return newOpacity;
  };
  return (
    <>
      <div className="relative w-full h-[100vh]">
        <img
          id="raves"
          className="w-full h-full object-cover"
          src={barbershop}
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
