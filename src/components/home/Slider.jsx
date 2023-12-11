import React, { useState } from "react";
import { Pause, Play } from "../../assets/svgs/svg-icons";
import Marquee from "react-fast-marquee";

const Slider = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <section className="w-full relative bg-primary pb-[6rem]">
      <div className="main-container slider-statement relative">
        <Marquee
          behaviour="alternate"
          className="slider-statement cursor-default py-[.6rem] bg-carpet-green relative"
          speed={180}
          play={toggle ? true : false}
        >
          <div className="element flex items-center gap-[5rem]">
            <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
            <span className="text-white font-cooper md:text-[1.9rem] text-[1.3rem] font-[800]">
              • Fresh Foods • Healthy Buy • From Farm 🚜 to Doorstep
            </span>
          </div>
        </Marquee>
        <button
          onClick={() => setToggle(!toggle)}
          className="pause_button z-[100] absolute md:top-[8px] top-[12%] right-[5%] flex items-center justify-center hover:opacity-[.9] transition-all delay-[.5sec] md:h-[2.75rem] md:w-[2.75rem] p-[.2rem] rounded-full bg-white border-solid border-[1.5px] hover:border-gray-500"
        >
          {toggle ? <Pause /> : <Play />}
        </button>
      </div>
    </section>
  );
};

export default Slider;
