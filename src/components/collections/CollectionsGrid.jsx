import React from "react";
import { Link } from "react-router-dom";
import { Bag } from "../../assets/svgs/svg-icons";

const CollectionsGrid = () => {
  const values = [{}, {}, {}, {}, {}, {}];
  return (
    <>
      <section className="w-full grid xl:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-[2rem] md:px-[3.3rem] px-[1.5rem] pb-[8rem] md:pt-[3rem] bg-primary">
        {values.map((element) => (
          <div className="product_card" key={Math.random()}>
            <div className="img_container relative md:min-h-[24rem] h-[11rem] overflow-hidden">
              <Link to={`/products/${element.name}`}>
                <img
                  src={element.img}
                  alt={element.name}
                  className={`h-full w-full object-cover hover:scale-[1.1] transition-all ease-in-out delay-[.25s]`}
                />
              </Link>
              <button className="absolute right-[15px] bottom-[15px] flex items-center justify-center hover:opacity-[.9] transition-all delay-[.5sec] ease-in-outs h-[2.75rem] w-[2.75rem] rounded-full bg-white border-solid border-[1.5px] border-gray-400 hover:border-gray-500">
                <Bag />
              </button>
            </div>
            <div className="details-containe md:pl-[.9rem] mt-[.8rem]">
              <small className="text-gray-400">Village Markt</small>
              <Link to={`/products/${element.name}`}>
                <span className="block name font-cooper md:text-[1.2rem] text-dark-green font-bold">
                  {element.name}
                </span>
                <span className="block text-black md:text-[1rem]">
                  {element.price}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CollectionsGrid;
