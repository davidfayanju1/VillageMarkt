import React from "react";
import { Link } from "react-router-dom";
const Bundles = () => {
  const products = [
    {
      img: "https://villagemarkt.com/cdn/shop/files/Frame_182.jpg?v=1697559850&width=950",
      name: "SALAD BUNDLE",
      link: "bundles",
    },
    {
      img: "https://villagemarkt.com/cdn/shop/files/Frame_183.jpg?v=1697545188&width=950",
      name: "FRIED-RICE BUNDLE",
      link: "bundles",
    },
    {
      img: "https://villagemarkt.com/cdn/shop/files/Frame_184.jpg?v=1697546081&width=950",
      name: "OTHER BUNDLES",
      link: "bundles",
    },
  ];
  return (
    <div className="md:min-h-[58rem] bg-primary md:pb-[10rem] pb-[7rem]">
      <section className="flex items-center justify-center w-full">
        <hgroup className="md:max-w-[55%] w-full flex flex-col items-center justify-center text-center">
          <span className="block text-light-green text-center mb-[1rem] md:text-[1.05rem]">
            SAVE ON BUNDLES
          </span>
          <h2 className="mb-[1.5rem] font-cooper text-center md:text-[2.9rem] text-[1.8rem] font-bold text-dark-green">
            Our Bundle Collections
          </h2>
          <p className="text-[1rem] max-w-[30rem] w-[90%] font-normal text-center">
            Get it even cheaper when you buy any of our carefully curated
            bundles
          </p>
        </hgroup>
      </section>
      <div className="products_container">
        <div className="asterisk_container flex items-end justify-end md:px-[3.3rem] mb-[-3rem] w-full">
          <div className="asterisk_content h-[10rem] w-[10rem] rounded-full bg-accent-yellow flex items-center justify-center z-[2]">
            <span className="text-dark-green font-cooper text-[1.3rem] font-bold w-[60%] text-center">
              Save Now
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center md:flex-nowrap flex-wrap gap-[1px] w-full md:px-[4rem]">
          {products?.map((product) => (
            <Link
              to={`/bundles/${product.name}`}
              className="card relative h-[22.52rem] md:w-[21.4rem] w-[91%] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[1] after:bg-gradient-to-b after:from-black-overlay-light after:to-black-overlay"
              key={product.name}
            >
              <img
                src={product.img}
                alt={product.name}
                className="h-full w-full object-cover relative mb-[8rem] z-[1]"
              />
              <div className="details-container text-center absolute top-[72%] left-[6%] z-[6] w-[89%]">
                <span className="block mb-[1rem] name font-cooper text-white text-[1.2rem] font-semibold">
                  {product.name}
                </span>
                <span className="block text-white font-cooper font-semibold text-[1rem] underline">
                  Check Bundle
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bundles;
