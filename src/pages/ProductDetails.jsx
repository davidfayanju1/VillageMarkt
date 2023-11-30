import React from "react";
import { useParams, NavLink } from "react-router-dom";
import useTitle from "../utils/useTitle";
import { ArrowRight } from "../assets/svgs/svg-icons";
import SecondLayout from "../layout/SecondLayout";
import { products } from "../utils/items";

const ProductDetails = () => {
  const { id } = useParams();

  useTitle(`${id} - Village Markt`);

  return (
    <SecondLayout>
      <div className="page-container min-h-screen bg-primary px-[3.3rem] py-[1.7rem]">
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
                    : "text-[.8rem] pointer-events-none text-gray-400"
                }
                to={`/collections/${id}`}
              >
                {`${id}`}
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="product_details_container">
          {products.map(
            (product) =>
              product.name === id && (
                <div className="product_details">
                  <div className="details_flex flex items-center gap-[1rem]  justify-between">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-[30rem] object-cover"
                    />

                    <div className="details_container">
                      <span className="block text-gray-400">Village Markt</span>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </SecondLayout>
  );
};

export default ProductDetails;
