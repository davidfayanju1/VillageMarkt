import React from "react";
import ProductCard from "./ProductCard";

const carousel = () => {
  return (
    <div className="w-full md:min-h-[42rem] bg-primary">
      <div className="asterisk_container flex items-end justify-end md:px-[3.3rem] mb-[-3rem] w-full">
        <div className=" h-[10rem] w-[10rem] rounded-full bg-light-green-2 flex items-center justify-center z-[2]">
          <span className="asterisk_content font-serif text-[1.2rem] font-medium w-[50%] text-center text-white">
            Certified Fresh
          </span>
        </div>
      </div>
      {/* carousel section */}
      <div className="carousel-container">
        <ProductCard />
      </div>
    </div>
  );
};

export default carousel;
