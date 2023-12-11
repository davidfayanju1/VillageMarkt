import React, { useState } from "react";
import { Pause, Play } from "../../assets/svgs/svg-icons";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Shop = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <section className="md:py-[3rem] bg-primary">
      {/* marquee */}
      <div className="relative">
        <Marquee
          behaviour="alternate"
          scrollamount="10"
          className="cursor-default py-[.6rem] bg-carpet-green relative"
          speed={180}
          play={toggle ? true : false}
        >
          <div className="flex items-center gap-[5rem]">
            <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-bold">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-bold">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-bold">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-bold">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-bold">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-bold">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-bold">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
          </div>
        </Marquee>
        <button
          onClick={() => setToggle(!toggle)}
          className="pause_button z-[10] absolute md:top-[8px] top-[13%] right-[5%] flex items-center justify-center hover:opacity-[.9] transition-all delay-[.5sec] md:h-[2.75rem] md:w-[2.75rem] p-[.2rem] rounded-full bg-white border-solid border-[1.5px] hover:border-gray-500"
        >
          {toggle ? <Pause /> : <Play />}
        </button>
      </div>

      <section className="md:mt-[8rem] mt-[4rem] flex flex-col items-center justify-center md:mb-[6rem] pb-[4rem] w-full">
        <hgroup className="md:max-w-[85%] w-[90%] flex flex-col items-center justify-center text-center">
          <span className="block text-carpet-green text-center mb-[1rem] md:text-[1.05rem]">
            SHOP WITH VILLAGE MARKT
          </span>
          <h2 className="mb-[1.5rem] md:w-[90%] w-[95%] font-cooper text-center md:text-[3.9vw] text-[1.65rem] font-bold text-dark-green">
            Organic, Sustainably Farmed, Ethically Sourced.
          </h2>
          <p className="text-[1rem] md:w-[90%] font-normal text-center">
            Discover our collection of farm-fresh produce that is organically
            grown, sustainably farmed, and ethically sourced. We prioritize
            proper storage techniques following industry and health standards to
            ensure impeccable quality. Each item is thoughtfully curated with
            love.
          </p>
        </hgroup>
        <section className="more_collection_button flex  items-center justify-center w-full mt-[6rem]">
          <Link
            to={"/collections"}
            className="green-button  block bg-accent-green hover:opacity-[.8] transition-all delay-[.25s] ease-in-out font-cooper text-white font-semibold text-[1.1rem] max-w-[8rem] rounded-full py-[.7rem] w-[90%] text-center"
          >
            Shop Now
          </Link>
        </section>
      </section>
    </section>
  );
};

export default Shop;
