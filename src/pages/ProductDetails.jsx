import React from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import useTitle from "../utils/useTitle";
import {
  ArrowRight,
  Custom,
  Leaf,
  Pickup,
  Share,
  ThumbsUp,
  Tick,
} from "../assets/svgs/svg-icons";
import SecondLayout from "../layout/SecondLayout";
import { products } from "../utils/items";

const ProductDetails = () => {
  const { id } = useParams();

  useTitle(`${id} - Village Markt`);

  return (
    <SecondLayout>
      <div className="page-container min-h-screen md:px-[3.3rem] px-[1.2rem] py-[1.7rem] pb-[15rem] bg-primary">
        <nav className="md:mb-[1rem]">
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

        {/* products */}
        <div className="product_details_container md:w-[97%] w-full">
          {products.map(
            (product) =>
              product.name === id && (
                <div className="product_details">
                  <div className="details_flex flex gap-[2rem] items-start justify-between md:flex-row flex-col">
                    <div className="img_container md:w-[50%] w-full">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="md:w-[30rem] w-full  object-cover"
                      />
                    </div>

                    <section className="details_container md:w-[50%] w-full md:mt-[2rem]">
                      <span className="block text-gray-400 mb-[1.5rem]">
                        Village Markt
                      </span>
                      <div className="name_container flex items-center justify-between md:mb-[3rem] mb-[1rem]">
                        <h1 className="md:text-[3rem] text-[1.5rem] font-bold font-cooper text-dark-green">
                          {product.name}
                        </h1>
                        <button className="flex items-center justify-center hover:opacity-[.9] transition-all delay-[.5sec] ease-in-outs h-[2.75rem] w-[2.75rem] rounded-full bg-white border-solid border-[1.5px] border-gray-400 hover:border-gray-500">
                          <Share />
                        </button>
                      </div>

                      <div className="price w-full bg-accent-green-2 min-h-[4rem] p-[1rem] mb-[2rem]">
                        <span className="block font-cooper text-dark-green md:text-[1.7rem] font-bold">
                          N{product.price}.00
                        </span>
                        <small className="text-gray-400">Tax included</small>
                      </div>
                      <div className="menu_button pt-[1rem] w-full flex items-center justify-between gap-[1rem] flex-col">
                        <button className="md:text-[1rem] text-dark-green hover:border-black hover:border-[1px] hover:transition-all hover:ease-in-out hover:delay-[.25s] font-bold py-[.7rem] w-full flex items-center justify-center bg-transparent border-solid border-[1px] border-gray-300 rounded-[25px] font-cooper">
                          Add to Cart
                        </button>
                        <button className="md:text-[1rem] text-white font-bold py-[.7rem] w-full flex items-center justify-center bg-accent-green hover:opacity-[.9] hover:transition-all hover:ease-in-out hover:delay-[.25s] hover:border-solid hover:border-[1.4px] hover:border-gray-300 rounded-[25px] font-cooper">
                          Checkout
                        </button>
                      </div>

                      {/* description */}

                      <section className="product_description mt-[4rem]">
                        <h1 className="title font-cooper mb-[3.7rem] font-bold md:text-[1.25rem] text-[1.1rem] text-dark-green">
                          Description
                        </h1>

                        <div className="first_flex flex md:items-center justify-between md:w-[80%] w-full md:flex-row flex-col gap-[2rem]">
                          <div className="items_container">
                            <ThumbsUp />
                            <span className=" mt-[1.1rem] block text-dark-green font-cooper text-[1.2rem] font-bold">
                              Item Heading
                            </span>
                          </div>
                          <div className="items_container">
                            <Leaf />
                            <span className=" mt-[1.1rem] block text-dark-green font-cooper text-[1.2rem] font-bold">
                              Item Heading
                            </span>
                          </div>
                        </div>

                        <div className="second_flex flex md:items-center justify-between md:w-[80%] w-full md:flex-row flex-col gap-[2rem] mt-[4rem]">
                          <div className="items_container">
                            <Custom />
                            <span className=" mt-[1.1rem] block text-dark-green font-cooper text-[1.2rem] font-bold">
                              Item Heading
                            </span>
                          </div>
                          <div className="items_container">
                            <Tick />
                            <span className=" mt-[1.1rem] block text-dark-green font-cooper text-[1.2rem] font-bold">
                              Item Heading
                            </span>
                          </div>
                        </div>

                        <div className="pickup bg-carpet-green gap-[1rem] w-full min-h-[12rem] mt-[3rem] flex items-start p-[1.2rem]">
                          <Pickup />
                          <div className="items_container">
                            <hgroup className="font-cooper text-white font-bold text-[1.3rem]">
                              Pickup available at Village Markt Mainland Store
                            </hgroup>
                            <span className="block text-white text-[.9rem] my-[.3rem]">
                              Usually ready in 24 hours
                            </span>
                            <Link
                              to={`/products/${product.name}`}
                              className="font-cooper text-white underline text-[.8rem] font-[600]"
                            >
                              View store information
                            </Link>
                          </div>
                        </div>
                      </section>
                    </section>
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
