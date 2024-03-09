import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cutting from "../imgs/cutting.jpg";
const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.8, // Trigger animation when 20% of the element is in view
  });
  return (
    <>
      <div className="w-full h-full bg-gray relative py-[50px] px-10">
        <div className="p-5 grid gap-4 w-full items-center md:grid-cols-2">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="shadow-lg shadow-midnight  bg-med-gray p-10">
              <img
                className="glow rounded-md w-full max-w-[600px] mx-auto shadow-lg shadow-midnight hover:grayscale-0"
                src={cutting}
                alt=""
              />
            </div>
          </motion.div>

          <div>
            <h1 className="text-white text-left font-Bebas text-4xl">
              FRESHHEADS BARBER SHOP
            </h1>
            <p className="text-offwhite mb-8">
              "Step into a space where style isn't just understood, it's
              reinvented. Here, every cut is more than just precise – it's your
              new edge. Dive into the cool with us, where the vibe's chill and
              the skills are sharp. Ready for a transformation that's not just
              seen, but felt? This is where it happens. Welcome to your next
              level of cool. Welcome to our barbershop."
            </p>
            <div className="bg-midnight p-5 rounded-lg shadow-lg shadow-med-gray">
              <h1 className="text-arctic text-center font-Bebas text-3xl">
                TOP OF THE CHAIN
              </h1>
              <p className="text-arctic text-center mx-auto lg:w-[70%]">
                "Our team brings to the chair a legacy of craftsmanship,
                boasting years of honing their art to perfection. Each stylist
                is a connoisseur of classic cuts and the latest trends, ensuring
                you're in the hands of seasoned experts. Trust in our hands,
                rich in experience, to give you more than just a haircut, but a
                masterpiece tailored just for you."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
