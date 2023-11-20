import React, { useState } from "react";

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
      <div className="pagination flex items-center justify-center gap-[.25rem]">
        <button
          className="bg-light-gray dark:bg-carousel dark:border-opacity-5 flex items-center justify-center w-[1.75rem] h-[1.75rem] text-base border-light-gray border-solid border-[1px] rounded-[.25rem]"
          onClick={onPrevClick}
          disabled={activePage === 1}
        >
          <ChevronLeft />
        </button>
        {btnCount.map((btn) => (
          <button
            key={Math.random()}
            className={
              btn === activePage
                ? "bg-white dark:bg-dark-primary text-yellow-400 w-[1.75rem] h-[1.75rem] text-[.8125rem] font-light rounded-[.25rem] border-light-gray border-solid border-[1px]"
                : "rounded-[.25rem] text-gray bg-light-gray dark:bg-dark-primary w-[1.75rem] h-[1.75rem] border-light-gray border-solid border-[1px] text-[.8125rem]"
            }
            onClick={() => handleChange(btn)}
          >
            {btn}
          </button>
        ))}
        <button
          className="w-[1.75rem] h-[1.75rem] bg-light-gray dark:border-opacity-5 dark:bg-carousel flex items-center justify-center text-base border-light-gray border-solid border-[1px] rounded-[.25rem]"
          onClick={onNextClick}
          disabled={activePage === btnCount.length}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
