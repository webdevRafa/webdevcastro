import { Parallax } from "react-parallax";
import scissors from "../imgs/scissors.jpg";
const Parallaxer = () => {
  return (
    <>
      <Parallax bgImage={scissors} strength={500}>
        <div style={{ height: 500 }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1 className="text-white text-4xl font-Josefin">
              QUALITY SERVICE & GREAT VIBES
            </h1>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Parallaxer;
