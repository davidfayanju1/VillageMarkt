import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Herosection = () => {
  const heroAnimation = {};
  return (
    <section>
      <div className="hero-container">
        <div className="image-container-desktop relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-dark after:bg-gradient-to-b after:from-dark after:via-accent-2 after:to-dark w-full md:block hidden">
          <img
            src="https://villagemarkt.com/cdn/shop/files/Frame_166-min.jpg?v=1697532449&width=750"
            alt=""
            className="w-full relative md:min-h-[38rem] object-cover"
          />
        </div>
        <div className="image-container-mobile relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-dark after:bg-gradient-to-b after:from-dark after:via-accent-2 after:to-dark w-full md:hidden block min-h-[20vh]">
          <img
            src="https://villagemarkt.com/cdn/shop/files/Frame_168-min.jpg?v=1697532449&width=450"
            alt=""
            className="w-full min-h-[10rem] object-cover"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="hero_text z-[500] absolute md:top-[19.7%] top-[32%] md:left-[5.5%] left-[4%] md:w-[55%] w-[95%]"
      >
        <h1 className="mb-[2rem] font-cooper text-white md:text-[6.5vw] text-[2rem] font-semibold">
          From Farm To Your Doorstep
        </h1>
        <p className="text-white md:w-[75%] w-[90%]">
          <b>Experience afforable shopping with us -</b>
          <i>
            we offer prices that are lower than the regular market, allowing you
            to save on your purchases.
          </i>
        </p>
        <div className="button_flex flex flex-wrap items-start md:w-full w-[90%]  gap-[1rem] mt-[3rem]">
          <Link
            to={"/products"}
            className="md:text-[1.2rem] text-white font-bold py-[.7rem] md:px-[2.3rem] px-[1.5rem] flex items-center justify-center bg-dark-green rounded-[25px] font-cooper md:min-w-[14rem]"
          >
            Shop Products
          </Link>
          <Link
            to={"/collections"}
            className="md:text-[1.2rem] text-dark-green font-bold py-[.7rem] md:px-[2.3rem] px-[1.5rem] flex items-center justify-center bg-white rounded-[25px] font-cooper md:min-w-[14rem]"
          >
            Shop Categories
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Herosection;
