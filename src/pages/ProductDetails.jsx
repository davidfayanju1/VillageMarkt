import React, { useEffect, useState } from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import useTitle from "../utils/useTitle";
import {
  ArrowRight,
  Custom,
  Leaf,
  Loader,
  Pickup,
  Share,
  ThumbsUp,
  Tick,
} from "../assets/svgs/svg-icons";
import SecondLayout from "../layout/SecondLayout";
import { products } from "../utils/items";
import { commerce } from "../lib/commerce";
import ClipLoader from "react-spinners/ClipLoader";

const ProductDetails = () => {
  const { id } = useParams();
  useTitle(`${id} - Village Markt`);
  // asynchronous
  const [loading, setLoading] = useState(true);
  const [commerceProducts, setcommerceProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setLoading(false);
      setcommerceProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [loading]);
  return (
    <SecondLayout>
      <div className="page-container min-h-screen py-[1.7rem] pb-[15rem] bg-primary">
        <nav className="md:mb-[1rem] md:px-[3.3rem] px-[1.2rem]">
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

        {commerceProducts.length === 0 ? (
          <section
            role="status"
            className="product_spinner h-screen bg-primary flex items-center justify-center text-center"
          >
            <ClipLoader />
          </section>
        ) : (
          <div className="product_details_container md:w-[97%] w-full md:mt-0 mt-[.5rem]">
            {commerceProducts.map(
              (product) =>
                product.name === id && (
                  <div className="product_details" key={product.name}>
                    <div className="details_flex flex gap-[2rem] items-start justify-between md:flex-row flex-col">
                      <figure className="img_container md:w-[50%] w-full">
                        <img
                          src={product.image.url}
                          alt={product.name}
                          className="w-full md:h-[35rem] object-cover"
                        />
                      </figure>

                      <section className="details_container md:px-[3.3rem] px-[1.2rem] md:w-[50%] w-full md:mt-[2rem]">
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
                            {product.price.formatted_with_symbol}
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

                          <div className="second_flex flex md:items-center justify-between md:w-[80%] w-full md:flex-row flex-col gap-[2rem] md:mt-[4rem] mt-[2rem]">
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

                          <div className="store_pickup relative bg-carpet-green md:gap-[1rem] gap-[.5rem] w-full min-h-[12rem] mt-[3rem] flex items-start justify-center md:p-[1.2rem] p-[1.4rem]">
                            <div className="svg_container">
                              <Pickup />
                            </div>
                            <div className="items_container">
                              <hgroup className="font-cooper text-white font-bold md:text-[1.2rem] text-[1.1rem]">
                                Pickup available at Village Markt Mainland Store
                              </hgroup>
                              <span className="block text-white text-[.9rem] md:my-[.3rem] my-[.55rem]">
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
        )}
      </div>
    </SecondLayout>
  );
};

export default ProductDetails;
