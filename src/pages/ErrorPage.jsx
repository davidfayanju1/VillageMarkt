import React from "react";
import SecondLayout from "../layout/SecondLayout";
import useTitle from "../utils/useTitle";
import { Link } from "react-router-dom";
import { Home, Shelter } from "../assets/svgs/svg-icons";

const ErrorPage = () => {
  useTitle("404 Not Found - Village Markt");

  return (
    <SecondLayout>
      <div className="main_page_container min-h-screen flex flex-col items-center text-center bg-primary pt-[5rem]">
        <span className="block text-light-green text-center mb-[1rem] md:text-[1.05rem] text-[.9rem]">
          404-PAGE NOT FOUND
        </span>
        <p className="font-cooper md:text-[4rem] font-bold md:max-w-[40rem] max-w-[80%] text-[1.5rem]">
          We're sorry, this page is not available
        </p>
        <span className="block px-[.3rem]">
          The page URL might be outdated or contain typo errors
        </span>

        <div className="routing_buttons mt-[2rem] flex flex-col gap-[1rem]">
          <Link
            to="/"
            className="font-cooper bg-transparent border-solid border-[1px] border-gray-300 hover:border-black rounded-full px-[2rem] font-bold gap-[.5rem] min-w-[8rem] flex items-center justify-center py-[.8rem]"
          >
            <Home />
            Visit our home page
          </Link>

          <Link
            to="/products"
            className="font-cooper bg-transparent border-solid border-[1px] border-gray-300 hover:border-black rounded-full px-[2rem] font-bold gap-[.5rem] min-w-[8rem] flex items-center justify-center py-[.8rem]"
          >
            <Shelter />
            Browse all products
          </Link>
        </div>
      </div>
    </SecondLayout>
  );
};

export default ErrorPage;
