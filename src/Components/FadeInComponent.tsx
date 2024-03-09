import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInComponent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est magni
        quisquam dolore vel modi odio saepe pariatur cumque, quos obcaecati
        velit? Aperiam totam libero sapiente vero praesentium. Architecto,
        mollitia illo.
      </p>
    </motion.div>
  );
};

export default FadeInComponent;
