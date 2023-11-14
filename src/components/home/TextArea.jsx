import React from "react";

const TextArea = () => {
  return (
    <section className="md:px-[4rem] px-[1rem] py-[3.5rem] bg-primary">
      <hgroup className="md:w-[55%] w-[93%] flex items-start justify-center flex-col">
        <span className="block text-light-green mb-[1rem] md:text-[1.37rem]">
          GET THESE AND MORE DELIVERED TO YOUR DOORSTEP
        </span>
        <h2 className="mb-[1.3rem] font-serif md:text-[3.8vw] text-[1.5rem] md:font-medium font-normal">
          Today's Farm Fresh Recommendations
        </h2>
        <p className="text-[1.1rem] font-normal w-[90%]">
          Our farmers advice and recommend these products for the healthiest
          outcomes
        </p>
      </hgroup>
    </section>
  );
};

export default TextArea;
