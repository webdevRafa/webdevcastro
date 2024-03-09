import barbershop from "../imgs/barbershop.jpg";
import logo from "../imgs/logo.svg";
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
      <div className="absolute pb-[200px] grid items-end justify-center h-full w-full">
        <div className="flex items-center">
          <img className="w-48 h-48" src={logo} alt="" />
        </div>
      </div>
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
