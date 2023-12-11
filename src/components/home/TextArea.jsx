import React from "react";
import { motion } from "framer-motion";

const TextArea = () => {
  const animateSection = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1.5 },
  };

  return (
    <section className="md:px-[4rem] px-[1rem] py-[3.5rem] bg-primary">
      <motion.hgroup
        {...animateSection}
        className="md:w-[55%] w-[93%] flex items-start justify-center flex-col"
      >
        <span className="block text-carpet-green mb-[1rem] md:text-[1.37rem]">
          GET THESE AND MORE DELIVERED TO YOUR DOORSTEP
        </span>
        <h2 className="mb-[1.3rem] font-cooper md:text-[4.5vw] text-[1.5rem] font-[600] text-dark-green">
          Today's Farm Fresh Recommendations
        </h2>
        <p className="text-[1.1rem] font-normal w-[90%] text-dark-green">
          Our farmers advice and recommend these products for the healthiest
          outcomes
        </p>
      </motion.hgroup>
    </section>
  );
};

export default TextArea;
