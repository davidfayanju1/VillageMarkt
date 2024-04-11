import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const carousel = () => {
  const [clockWise, setClockwise] = useState(false);

  return (
    <div className="w-full md:min-h-[42rem] bg-primary">
      <section className="asterisk_container flex items-end justify-end md:px-[3.3rem] mb-[-3rem] w-full">
        <motion.div
          onClick={() => setClockwise(!clockWise)}
          className="asterisk_content cursor-pointer h-[10rem] w-[10rem] rounded-full bg-light-green-2 flex items-center justify-center z-[2]"
          animate={{ rotate: clockWise ? 10 : 0 }}
          transition={{ ease: "linear", duration: 0.2 }}
        >
          <span className="font-cooper text-[1.2rem] font-medium w-[50%] text-center text-white">
            Certified Fresh
          </span>
        </motion.div>
      </section>
      {/* carousel section */}
      <section className="carousel-container">
        <ProductCard />
      </section>
    </div>
  );
};

export default carousel;
