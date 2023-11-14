import React, { useState } from "react";
import { Pause, Play } from "../../assets/svgs/svg-icons";

const Slider = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <section className="w-full md:min-h-[45vh] pb-[4rem] relative bg-primary">
      <div className="main-container slider-statement relative">
        <marquee
          behaviour="alternate"
          scrollamount="10"
          className="slider-statement cursor-default md:py-[.5rem] py-[.2rem] bg-carpet-green relative"
        >
          <div className="element flex items-center gap-[5rem]">
            <span className="text-white font-serif md:text-[1.9rem] text-[1.2rem] font-semibold">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-serif md:text-[1.9rem] text-[1.2rem] font-semibold">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-serif md:text-[1.9rem] text-[1.2rem] font-semibold">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-serif md:text-[1.9rem] text-[1.2rem] font-semibold">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-serif md:text-[1.9rem] text-[1.2rem] font-semibold">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-serif md:text-[1.9rem] text-[1.2rem] font-semibold">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-serif md:text-[1.9rem] text-[1.2rem] font-semibold">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
          </div>
        </marquee>
        <button
          onClick={() => setToggle(!toggle)}
          className="absolute md:top-0 top-[-5px] right-[5%] flex items-center justify-center hover:opacity-[.9] transition-all delay-[.5sec] md:h-[2.75rem] md:w-[2.75rem] p-[.2rem] rounded-full bg-white border-solid border-[1.5px] border-gray-400 hover:border-gray-500"
        >
          {toggle ? <Pause /> : <Play />}
        </button>
      </div>
    </section>
  );
};

export default Slider;
