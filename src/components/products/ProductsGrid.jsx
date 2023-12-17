import React, { useEffect, useState } from "react";
import {
  Bag,
  Loader,
  PaginationLeft,
  PaginationRight,
} from "../../assets/svgs/svg-icons";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { commerce } from "../../lib/commerce";
import ClipLoader from "react-spinners/ClipLoader";

const ProductsGrid = ({ filtered:commerceProducts }) => {
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

  return (
    <>
      {commerceProducts.length === 0 ? (
        <section className="product_spinner bg-primary flex items-start justify-center text-center h-screen">
          <ClipLoader />
        </section>
      ) : (
        <section className="w-full grid xl:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-[1rem] md:px-[3.3rem] px-[1rem] pb-[8rem] md:pt-[3rem] bg-primary">
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
          ))}
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
