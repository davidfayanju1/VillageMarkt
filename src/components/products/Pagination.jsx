import React, { useState } from "react";
import { PaginationLeft, PaginationRight } from "../../assets/svgs/svg-icons";

const Pagination = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [display, setDisplay] = useState(6);
  const [activePage, setActivePage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(9);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const last = currentPage * display;
  const first = last - display;
  const values = products.slice(first, last);
  const btnCount = [];

  for (let i = 1; i <= Math.ceil(products.length / display); i++) {
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
  };

  // Next
  const onNextClick = () => {
    if (currentPage - 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + display);
      setMinPageLimit(minPageLimit + display);
    }
    setCurrentPage((prev) => prev + 1);
    setActivePage((prev) => prev + 1);
  };
  return (
    <div>
      <div className="pagination bg-primary flex items-center justify-center gap-[.25rem]">
        <button
          className="bg-light-gray dark:bg-carousel dark:border-opacity-5 flex items-center justify-center w-[3rem] rounded-full h-[3rem] text-base border-light-gray border-solid border-[1px]"
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
                ? "bg-white dark:bg-dark-primary text-yellow-400 w-[3rem] rounded-full h-[3rem] text-[.8125rem] font-light border-light-gray border-solid border-[1px]"
                : "text-gray bg-light-gray dark:bg-dark-primary w-[3rem] rounded-full h-[3rem] border-light-gray border-solid border-[1px] text-[.8125rem]"
            }
            onClick={() => handleChange(btn)}
          >
            {btn}
          </button>
        ))}
        <button
          className="w-[3rem] rounded-full h-[3rem] bg-light-gray dark:border-opacity-5 dark:bg-carousel flex items-center justify-center text-base border-light-gray border-solid border-[1px]"
          onClick={onNextClick}
          disabled={activePage === btnCount.length}
        >
          <PaginationRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
