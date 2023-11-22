import React from "react";
import { Link } from "react-router-dom";

const Fresh = () => {
  return (
    <section className="w-full pb-[8rem] bg-primary min-h-[50rem] md:px-[4rem] px-[1rem]">
      <div className="content-container flex md:flex-row flex-col gap-[2rem] items-center justify-between">
        <section className="text-section md:max-w-[55%] w-[95%] flex flex-col justify-start items-start">
          <div className="asterisk_container flex items-end justify-end md:mt-[-6rem] w-full">
            <div className=" h-[9rem] w-[9rem] rounded-full bg-light-green-2 flex items-center justify-center z-[2]">
              <span className="asterisk_content text-white font-serif text-[1.15rem] font-medium w-[80%] text-center">
                Today's farm fresh
              </span>
            </div>
          </div>
          <span className="block text-light-green mb-[1rem] md:text-[1.05rem] text-[.9rem]">
            CAREFULLY HAND-PICKED BY QUALITY FARMERS AND DEDICATED FOODIES LOL.
          </span>
          <h2 className="mb-[1.5rem] font-cooper md:text-[3.8vw] text-[1.5rem] md:font-bold text-dark-green font-normal">
            IF IT'S NOT FRESH, IT'S NOT FROM US
          </h2>
          <p className="text-[.9rem] font-normal md:w-[57%] mb-[3rem]">
            Fuel your body with our delicious and nutritious wholefoods.
            Discover the benefits of healthy eating without sacrificing flavor.
          </p>
          <Link
            to={"/collections"}
            className="block bg-accent-green hover:opacity-[.8] hover:border-solid hover:border-[2px] hover:border-gray-400 hover:transition-all hover:delay-[.25s] hover:ease-in-out transition-all delay-[.25s] ease-in-out font-cooper text-white font-bold text-[1.1rem] max-w-[7rem] rounded-full py-[.7rem] w-[90%] text-center"
          >
            Indulge
          </Link>
        </section>
        <section className="picture_section h-[32rem] md:w-[40%] w-[80%] self-end">
          <img
            src="https://villagemarkt.com/cdn/shop/files/Frame_162-min.jpg?v=1697530975&width=750"
            alt="sectional-picture"
            className="w-full h-full object-cover"
          />
        </section>
      </div>
    </section>
  );
};

export default Fresh;
