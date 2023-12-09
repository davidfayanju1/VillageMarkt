import React from "react";
import useTitle from "../utils/useTitle";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight } from "../assets/svgs/svg-icons";
import SecondLayout from "../layout/SecondLayout";
import { collections } from "../utils/items";

const Collections = () => {
  useTitle("Collections-Village Markt");

  return (
    <SecondLayout>
      <section className="collection min-h-screen md:px-[4rem] pb-[8rem] pt-[1.4rem] px-[1.1rem] bg-primary">
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
          <span className="title font-[600] font-cooper text-dark-green block md:text-[2.8rem] text-[2rem] mb-[4rem]">
            Collections
          </span>
        </hgroup>

        <div className="products grid xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(135px,_1fr))] md:gap-[2rem] gap-[.8rem]">
          {collections.map((product) => (
            <div
              className="card_overlay relative overflow-hidden cursor-pointer md:h-[22rem] h-[16rem] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[2] before:content-[''] before:bg-gradient-to-b before:from-black-overlay-light before:to-black-overlay"
              key={product.category}
            >
              <div className="image-container w-full h-full overflow-hidden">
                <img
                  src={product.img}
                  alt={product.category}
                  className="image hover:scale-[1.1] transition-transform delay-[0.25sec] ease-in-out h-full w-full object-cover relative z-[1]"
                />
              </div>
              <div className="details-container absolute md:top-[76%] top-[70%] left-[7.5%] z-[6] w-[89%] text-left">
                <span className="block name font-cooper text-white md:text-[1.1rem] text-[.85rem] font-[600]">
                  {product.category}
                </span>
                <Link
                  to={`/collections/${product.category}`}
                  className="text-white underline font-cooper font-[600] md:text-[.95rem] text-[.9rem]"
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
