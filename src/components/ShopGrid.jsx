import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleClose } from "../redux/slices/toggleSlice";

const ShopGrid = () => {
  const dispatch = useDispatch();

  const products = [
    {
      name: "Fruits",
      path: "/collections/Fruits",
      img: "https://villagemarkt.com/cdn/shop/collections/Fruits_cover.png?v=1697479233&width=550",
    },
    {
      name: "Grains",
      path: "/collections/Grains",
      img: "https://villagemarkt.com/cdn/shop/collections/WhatsApp_Image_2023-10-15_at_14.18.11.jpg?v=1697376135&width=550",
    },
    {
      name: "Protein",
      path: "/collections/Protein",
      img: "https://villagemarkt.com/cdn/shop/collections/Goat_meat.png?v=1697479476&width=550",
    },
    {
      name: "Seafoods",
      path: "/collections/Seafoods",
      img: "https://villagemarkt.com/cdn/shop/collections/Fresh_Shrimp.png?v=1697479556&width=550",
    },
    {
      name: "Tomatoes and Pepper",
      path: "/collections/Tomatoes and Pepper",
      img: "https://villagemarkt.com/cdn/shop/collections/Tomatoes.png?v=1697479679&width=550",
    },
    {
      name: "Vegetables",
      path: "/collections/Vegetables",
      img: "https://villagemarkt.com/cdn/shop/collections/Ewedu.png?v=1697479271&width=550",
    },
  ];

  return (
    <section className="sidebar-products-container grid grid-cols-2 gap-[1px]">
      {products.map((product) => (
        <Link
          to={product.path}
          onClick={() => dispatch(toggleClose())}
          key={product.img}
        >
          <div className="container overflow-hidden h-[11rem] md:w-[11rem] w-full transition-transform delay-[0.25sec] ease-in-out">
            <div className="card relative overflow-hidden cursor-pointer h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full mb-[4rem] before:z-[2] before:content-[''] before:bg-gradient-to-b before:from-black-overlay-light before:to-black-overlay">
              <div className="image-container w-full h-full overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="image hover:scale-[1.1] transition-transform delay-[0.25sec] ease-in-out h-full w-full object-cover relative mb-[8rem] z-[1]"
                />
              </div>
              <div className="details-container absolute top-[65%] left-[8%] z-[2]">
                <span className="block name font-serif text-white text-[1.1rem] font-[500]">
                  {product.name}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ShopGrid;
