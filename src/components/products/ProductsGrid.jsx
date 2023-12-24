import React, { useEffect, useState } from "react";
import {
  Bag,
  Cancel,
  Loader,
  MinusIcon,
  PaginationLeft,
  PaginationRight,
  PlusIcon,
} from "../../assets/svgs/svg-icons";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { commerce } from "../../lib/commerce";
import ClipLoader from "react-spinners/ClipLoader";

const ProductsGrid = ({ filtered: commerceProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [display, setDisplay] = useState(12);
  const [activePage, setActivePage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(9);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const last = currentPage * display;
  const first = last - display;
  const values = commerceProducts.slice(first, last);
  const btnCount = [];

  for (let i = 1; i <= Math.ceil(commerceProducts.length / display); i++) {
    btnCount.push(i);
  }

  const handleChange = (i) => {
    setCurrentPage(i);
    setActivePage(i);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // prev
  const onPrevClick = () => {
    if ((currentPage - 1) % display === 0) {
      setMaxPageLimit(maxPageLimit - display);
      setMinPageLimit(minPageLimit - display);
    }
    setCurrentPage((prev) => prev - 1);
    setActivePage((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  // Next
  const onNextClick = () => {
    if (currentPage - 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + display);
      setMinPageLimit(minPageLimit + display);
    }
    setCurrentPage((prev) => prev + 1);
    setActivePage((prev) => prev + 1);

    window.scrollTo(0, 0);
  };

  // add to cart
  const [cart, setCart] = useState({});
  const [cartLoader, setCartLoader] = useState(false);
  const [cartError, setCartError] = useState("");
  const [cartNote, setCartNote] = useState(false);

  const addToCart = async (productId, quantity) => {
    try {
      setCartLoader(true);
      const item = await commerce.cart.add(productId, quantity);
      setCart(item.cart);
    } catch (error) {
      setCartError(error);
    } finally {
      setCartLoader(false);
      setCartNote(true);
    }
  };
  // Add to cart modal
  const [openModal, setOpenModal] = useState(false);
  const [modalResults, setModalResults] = useState([]);
  const handleModal = (id) => {
    const results = commerceProducts.filter((item) => item.id === id);
    setModalResults(results);
    setOpenModal(true);
  };
  return (
    <>
      {commerceProducts.length === 0 ? (
        <section className="product_spinner bg-primary flex items-start justify-center text-center h-screen">
          <ClipLoader />
        </section>
      ) : (
        <section className="w-full relative grid xl:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-x-[1rem] gap-y-[1.8rem] md:px-[3.3rem] px-[1rem] pb-[8rem] md:pt-[3rem] bg-primary">
          {values.map((element, index) => (
            <div
              key={index}
              className="product_card"
              //   onMouseEnter={() => setChange(element.id)}
              //   onMouseLeave={() => setChange("")}
            >
              <div className="img_container relative md:min-h-[24rem] h-[12.7rem] overflow-hidden">
                <Link to={`/products/${element.name}`}>
                  <img
                    src={element.image.url}
                    alt={element.name}
                    className={`h-full w-full object-cover hover:scale-[1.1] transition-all ease-in-out delay-[.25s]`}
                  />
                </Link>
                <button
                  onClick={() => handleModal(element.id)}
                  className="absolute right-[15px] bottom-[15px] flex items-center justify-center hover:opacity-[.9] transition-all delay-[.5sec] ease-in-outs h-[2.75rem] w-[2.75rem] rounded-full bg-white border-solid border-[1.5px] border-gray-400 hover:border-gray-500"
                >
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
          ))}
          {cartLoader && (
            <section className="absolute top-0 left-0 w-full h-full bg-black-overlay-2 flex items-center justify-center">
              <ClipLoader />
            </section>
          )}
        </section>
      )}
      {/* product modal */}
      {openModal && (
        <section className="modal">
          <div className="overlay fixed top-0 left-0 w-full h-full bg-black-overlay-2 z-[4000] flex md:items-center md:justify-center">
            <div className="card md:w-[45rem] w-full min-h-[20rem] absolute md:bottom-[4%] bottom-[0%]">
              <div className="title px-[1rem] bg-primary py-[1.5rem] flex items-center justify-between">
                <h1 className="font-cooper text-dark-green font-bold text-[1.3rem]">
                  Quick shop
                </h1>
                <button onClick={() => setOpenModal(false)}>
                  <Cancel className="cursor-pointer" />
                </button>
              </div>

              <div className="content_container bg-white before:block before:w-full before:h-[.1rem] before:bg-gray-200">
                {modalResults.map((item) => (
                  <section className="container" key={item.id}>
                    <div className="product_card p-[1rem]">
                      <div className="flex gap-[1rem] mb-[2rem]">
                        <figure>
                          <img
                            src={item.image.url}
                            alt={item.name}
                            className="w-[7rem] h-[7rem]"
                          />
                        </figure>
                        <div className="details_container flex flex-col justify-between">
                          <span className="block details font-cooper font-bold text-dark-green">
                            {item.name}
                          </span>
                          <span className="block mb-[1.3rem] details font-bold text-dark-green">
                            {item.price.formatted_with_symbol}
                          </span>
                        </div>
                      </div>
                      <Link
                        to={`/products/${item.name}`}
                        className="font-cooper underline text-dark-green font-bold hover:text-carpet-green text-[.9rem]"
                      >
                        View product details
                      </Link>
                    </div>
                    <div className="items_number_container bg-primary before:block before:w-full before:h-[.1rem] before:bg-gray-200">
                      <div className="item_number py-[2rem] px-[1rem] h-full flex md:items-center justify-between md:flex-row flex-col gap-[2rem]">
                        <div className="plus_minus w-[9rem] border-solid rounded-full border-gray-300 border-[1px] flex items-center justify-between px-[.9rem] py-[.7rem]">
                          <button>
                            <MinusIcon />
                          </button>
                          <span className="block">{1}</span>
                          <button>
                            <PlusIcon />
                          </button>
                        </div>
                        <button
                          onClick={() => addToCart(item.id, 1)}
                          className="add_to_cart md:text-[1rem] text-white font-bold py-[.7rem] md:w-[8rem] flex items-center justify-center bg-accent-green hover:opacity-[.9] hover:transition-all hover:ease-in-out hover:delay-[.25s] hover:border-solid hover:border-[1.4px] hover:border-gray-300 rounded-[25px] font-cooper"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* pagination */}
      <section className="pagination">
        <div className="pagination pb-[8rem] bg-primary flex items-center justify-center gap-[.8rem]">
          <button
            className={`flex items-center justify-center w-[3.5rem] rounded-full h-[3.5rem] border-light-gray border-solid border-[1.5px] ${
              activePage === 1 ? "bg-gray-300 opacity-25" : ""
            }`}
            onClick={onPrevClick}
            disabled={activePage === 1}
          >
            <PaginationLeft />
          </button>
          {btnCount.map((btn) => (
            <button
              key={Math.random()}
              className={
                btn === activePage
                  ? "text-[1.5rem] text-white font-serif bg-dark-green dark:bg-dark-primary w-[3.5rem] rounded-full h-[3.5rem] font-light"
                  : "text-gray bg-light-gray dark:bg-dark-primary w-[3.5rem] rounded-full h-[3.5rem] border-light-gray border-solid border-[1.5px] text-[1.5rem] font-serif"
              }
              onClick={() => handleChange(btn)}
            >
              {btn}
            </button>
          ))}
          <button
            className={`w-[3.5rem] rounded-full h-[3.5rem] bg-light-gray dark:border-opacity-5 dark:bg-carousel flex items-center justify-center text-base border-light-gray border-solid border-[1.5px] ${
              activePage === btnCount.length ? "bg-gray-300 opacity-25" : ""
            }`}
            onClick={onNextClick}
            disabled={activePage === btnCount.length}
          >
            <PaginationRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductsGrid;
