import React from "react";
import useTitle from "../utils/useTitle";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight } from "../assets/svgs/svg-icons";
import SecondLayout from "../layout/SecondLayout";

const Collections = () => {
  useTitle("Collections-Village Markt");

  // fruits, grains,oil,proteins

  const productsCategories = [
    {
      img: "https://villagemarkt.com/cdn/shop/collections/Frame_178.jpg?v=1697539612&width=550",
      category: "Bundles",
      quantity: 3,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/collections/Titus_sardines.png?v=1697527403&width=550",
      category: "Canned foods",
      quantity: 14,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/collections/Fresh_Shrimp.png?v=1697479556&width=550",
      category: "Seafoods",
      quantity: 10,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/collections/Egusi.png?v=1697479516&width=550",
      category: "Soup Seeds",
      quantity: 4,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/collections/Curry.png?v=1697479619&width=550",
      category: "Spices",
      quantity: 16,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/collections/Tomatoes.png?v=1697479679&width=550",
      category: "Tomatoes and Peppers",
      quantity: 16,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/collections/Plantain_bunch.png?v=1697479742&width=550",
      category: "Tubers",
      quantity: 5,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/collections/Ewedu.png?v=1697479271&width=550",
      category: "Vegetables",
      quantity: 21,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/collections/Fruits_cover.png?v=1697479233",
      category: "Fruits",
      quantity: 20,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/collections/Oils_cover.png?v=1697479708&width=450",
      category: "Oils",
      quantity: 11,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/collections/WhatsApp_Image_2023-10-15_at_14.18.11.jpg?v=1697376135",
      category: "Grains",
      quantity: 20,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/collections/Goat_meat.png?v=1697479476",
      category: "Protein",
      quantity: 20,
    },
  ];

  return (
    <SecondLayout>
      <section className="collectionmin-h-screen md:px-[4rem] pb-[8rem] pt-[1.4rem] px-[1.1rem] bg-primary">
        <nav className="md:mb-[5rem] mb-[4rem]">
          <ul className="flex items-center gap-[.5rem]">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-[.8rem]" : "underline text-[.8rem]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <ArrowRight />
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-400 text-[.8rem] pointer-events-none"
                    : ""
                }
                to={"/collections"}
              >
                Collections
              </NavLink>
            </li>
          </ul>
        </nav>
        <hgroup>
          <span className="title block font-serif md:text-[2.5rem] text-[2rem] md:text-left text-center mb-[6rem]">
            Collections
          </span>
        </hgroup>

        <div className="products grid md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] md:gap-[2rem] gap-[.8rem]">
          {productsCategories.map((product) => (
            <div
              className="card relative overflow-hidden cursor-pointer h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full mb-[4rem] before:z-[2] before:content-[''] before:bg-gradient-to-b before:from-black-overlay-light before:to-black-overlay"
              key={product.category}
            >
              <div className="image-container w-full h-full overflow-hidden">
                <img
                  src={product.img}
                  alt={product.category}
                  className="image hover:scale-[1.1] transition-transform delay-[0.25sec] ease-in-out h-full w-full object-cover relative mb-[8rem] z-[1]"
                />
              </div>
              <div className="details-container absolute top-[79%] left-[6%] z-[6] w-[89%] text-left">
                <span className="block name font-serif text-white md:text-[1.2rem] text-[.82rem] font-[500]">
                  {product.category}
                </span>
                <Link
                  to={`/product/${product.category}`}
                  className="text-white underline font-serif md:text-[1rem] text-[.9rem]"
                >
                  View {product.quantity} products
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SecondLayout>
  );
};

export default Collections;
