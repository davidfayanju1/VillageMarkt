import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Down, Filter } from "../../assets/svgs/svg-icons";
import { useDispatch } from "react-redux";
import { filterOpen } from "../../redux/slices/toggleFilter";
const FilterSection = ({ commerceProducts, sortArray }) => {
  // const dispatch = useDispatch();
  // const [filtered, setFiltered] = useState([]);
  // // sort

  // const sortArray = (type) => {
  //   const types = {
  //     alphabetically: "alphabetically",
  //     reverseAphabetically: "reverse alphabetically",
  //     featured: "featured",
  //     bestSelling: "best selling",
  //     price: "price",
  //     reversePrice: "reverse price",
  //     date: "date",
  //     reverseDate: "reverse date",
  //   };

  //   // const sortProperty = types[type];

  //   if (commerceProducts.length > 0) {
  //     if (type === types.alphabetically) {
  //       commerceProducts.sort((a, b) => {
  //         if (a.name < b.name) {
  //           return -1;
  //         }
  //         if (a.name > b.name) {
  //           return 1;
  //         }
  //         return 0;
  //       });
  //     } else {
  //       console.log(types.alphabetically, type);
  //     }
  //   }
  //   setFiltered(commerceProducts);
  // };

  return (
    <section className="md:min-h-[60vh] md:px-[4rem] pt-[1rem] pb-[2.5rem] bg-primary px-[1.4rem]">
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
                isActive ? "" : "underline text-[.8rem]"
              }
              to={"/collections"}
            >
              Collections
            </NavLink>
          </li>
          <li>
            <ArrowRight />
          </li>
          <li>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive ? "text-gray-400 pointer-events-none text-[.8rem]" : ""
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
      <hgroup>
        <span className="title block font-cooper font-bold md:text-[2.8rem] text-[2rem] md:text-left text-center mb-[6rem] text-dark-green">
          Products
        </span>
      </hgroup>

      <section className="filter flex md:flex-row flex-col gap-[2rem] items-center md:justify-between justify-center">
        <button
          onClick={() => dispatch(filterOpen())}
          className="font-cooper font-semibold md:w-[7rem] w-full text-[1.1rem] filter border-solid border-[2px] border-gray-300 rounded-full text-center transition-all ease-in-out delay-100"
        >
          <div className="inner-container flex md:gap-[.5rem] gap-[.5rem] items-center justify-center hover:border-gray-700 hover:border-[1px] hover:border-solid w-full h-full rounded-full px-[1rem] py-[.6rem] transition-all ease-in-out delay-[.25s]">
            Filter
            <Filter />
          </div>
        </button>

        <div className="sort md:w-[20rem] w-full flex items-center md:justify-center justify-between gap-[1rem]">
          <span className="block product_number text-gray-400 md:w-[10rem] w-[40%]">
            {commerceProducts.length} Products
          </span>
          <div className="relative md:min-w-[13rem] w-[60%] filter_button">
            <select
              onChange={(e) => sortArray(e.target.value)}
              className="sort-component  py-[.8rem] px-[1rem] w-full outline-none appearance-none transition-all delay-[.25s] ease-in-out border-solid border-gray-300 border-[1px] p-[.5rem] flex items-center justify-center bg-transparent"
              // defaultValue="alphabetically"
            >
              {/* <option value="" disabled></option> */}
              <option value="alphabetically" selected>
                Aphabetically, A-Z
              </option>
              <option value="reverse alphabetically">Aphabetically, Z-A</option>
              <option value="featured">Featured</option>
              <option value="best selling">Best Selling</option>
              <option value="price">Price low to high</option>
              <option value="reverse price">Price high to low</option>
              <option value="date">Date, old to new</option>
              <option value="reverse date">Date, new to old</option>
            </select>
            <Down className="absolute top-[15px] right-[9.6px]" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default FilterSection;
