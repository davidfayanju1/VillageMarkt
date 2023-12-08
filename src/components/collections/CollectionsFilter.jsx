import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Down, Filter } from "../../assets/svgs/svg-icons";
import { useDispatch } from "react-redux";
import { filterOpen } from "../../redux/slices/toggleFilter";

const CollectionsFilter = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <section>
      <nav className="mb-[2.5rem] md:px-[4rem] mt-[1rem]">
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

      <div className="page_title flex items-center justify-between md:flex-row flex-col-reverse md:pl-[5rem] gap-[2rem]">
        <h1 className="font-cooper font-bold md:text-[2.6rem] text-[1.5rem]">
          {id}
        </h1>
        <figure className="md:w-[50%] w-full bg-gray-100">
          <img src={"ok"} className="w-full h-[16rem] object-cover" alt={id} />
        </figure>
      </div>

      <section className="filter flex md:flex-row flex-col gap-[2rem] items-center md:justify-between justify-center md:px-[5.5rem] md:mt-[5rem] mt-[2rem] mb-[2rem] px-[1.5rem]">
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
            {14} Products
          </span>
          <div className="relative md:min-w-[13rem] w-[60%]">
            <select className="sort-component py-[.8rem] px-[1rem] w-full appearance-none hover:border-[3px] transition-all delay-[.25s] ease-in-out border-solid border-gray-300 border-[1px] p-[.5rem] flex items-center justify-center bg-transparent">
              {/* <option value="" hidden selected></option> */}
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

export default CollectionsFilter;
