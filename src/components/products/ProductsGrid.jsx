import React from "react";
import { Bag } from "../../assets/svgs/svg-icons";

const ProductsGrid = () => {
  const products = [
    {
      img: "https://villagemarkt.com/cdn/shop/files/Bakedbeans.png?v=1697471180&width=950",
      name: "Baked Beans",
      price: "N595.00",
      qty: 44,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/files/BamaBig.png?v=1697471618&width=950",
      name: "Bama Mayonnaise",
      price: "N1,500.00",
      qty: 4,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/files/Avocado.png?v=1697471134&width=950",
      name: "Avocado",
      price: "N300.00",
      qty: 44,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/files/Banana.png?v=1697472077&width=950",
      name: "Banana",
      price: "N700.00",
      qty: 40,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/files/Bakedbeans.png?v=1697471180&width=950",
      name: "Baked Beans",
      price: "N595.00",
      qty: 44,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/files/Bakedbeans.png?v=1697471180&width=950",
      name: "Baked Beans",
      price: "N595.00",
      qty: 44,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/files/Bakedbeans.png?v=1697471180&width=950",
      name: "Baked Beans",
      price: "N595.00",
      qty: 44,
    },
  ];

  return (
    <section className="products-grid w-full md:mt-[3rem] md:px-[4rem] px-[1.5rem] pb-[8rem]">
      {products.map((element) => (
        <div
          className="card relative"
          key={element.name}
          //   onMouseEnter={() => setChange(element.id)}
          //   onMouseLeave={() => setChange("")}
        >
          <img
            src={element.img}
            alt={element.name}
            className={`h-full w-full object-cover`}
          />
          <div className="flex items-end justify-end w-full">
            <button className="absolute right-[15px] bottom-[15px] flex items-center justify-center hover:opacity-[.9] transition-all delay-[.5sec] ease-in-outs h-[2.75rem] w-[2.75rem] rounded-full bg-white border-solid border-[1.5px] border-gray-400 hover:border-gray-500">
              <Bag />
            </button>
          </div>
          <div className="details-container">
            <small className="text-gray-200">Village Markt</small>
            <span className="block name font-serif text-[1.4rem] font-[500] text-black">
              {element.name}
            </span>
            <span className="block text-white">From {element.price}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsGrid;
