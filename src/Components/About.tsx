import React from "react";
import cutting from "../imgs/cutting.jpg";
import logo from "../imgs/logo.svg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <>
      <div className="midnight w-full py-[60px]">
        <div className="grid grid-cols-2 gap-4 w-[90%] mx-auto p-10 md:max-w-[1200px]">
          <div className="border-4 border-white">
            <img
              className="w-full h-full object-cover max-w-[600px]"
              src={cutting}
              alt=""
            />
          </div>
          <Fade>
            <div className="p-10">
              <img className="w-full max-w-[200px]" src={logo} alt="" />
              <p className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam ipsam quam a quas itaque. Nisi in neque ut repellat
                suscipit.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
