import React from "react";
import { Link } from "react-router-dom";
import { Bag } from "../../assets/svgs/svg-icons";
import ClipLoader from "react-spinners/ClipLoader";

const CollectionsGrid = ({ commerceProducts, id, loading }) => {
  
  console.log(commerceProducts);
  return (
    <>
      <section className="w-full grid xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] md:gap-[2rem] gap-[1.5rem] md:px-[3.3rem] px-[1rem] pb-[8rem] md:pt-[3rem]">
        {commerceProducts.length === 0 ? (
          <section className="product_spinner bg-primary flex items-start justify-center text-center h-screen">
            <ClipLoader />
          </section>
        ) : (
          commerceProducts.map(
            (element) =>
              element.categories[0].name === id && (
                <div className="product_card" key={Math.random()}>
                  <div className="img_container relative md:min-h-[24rem] h-[11rem] overflow-hidden">
                    <Link to={`/products/${element.name}`}>
                      <img
                        src={element.image.url}
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
                        {element.price.formatted_with_symbol}
                      </span>
                    </Link>
                  </div>
                </div>
              )
          )
        )}
      </section>
    </>
  );
};

export default CollectionsGrid;
