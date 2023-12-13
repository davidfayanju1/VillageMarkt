import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Cancel, Check, Minus, Plus } from "../assets/svgs/svg-icons";
import { filterClose } from "../redux/slices/toggleFilter";

const FilterSide = () => {
  const { open } = useSelector((store) => store.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [open]);
  const panel = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
    transition: { duration: 0.2 },
  };
  const panelBg = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.3 },
  };

  const [toggleSvg, setToggleSvg] = useState(true);
  const [toggleSecondSvg, setToggleSecondSvg] = useState(true);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <motion.div
          {...panelBg}
          className="aside_container fixed top-0 left-0 h-full w-full z-[900000] bg-black-overlay-2 overflow-hidden aside"
          // onClick={() => dispatch(toggleClose())}
        >
          <motion.aside
            {...panel}
            className="bg-primary absolute top-0 left-0 h-screen pb-[3rem] md:w-[27rem] w-full z-[10000]"
          >
            <div className="content w-full">
              <section className="bg-primary w-full after:block after:w-full after:h-[.03rem] after:bg-gray-400">
                <div className="menu md:px-[2rem] px-[1rem] py-[1rem] w-full flex items-center justify-between">
                  <span className="block font-cooper text-[1.2rem] font-bold text-dark-green">
                    Filter
                  </span>
                  <Cancel
                    onClick={() => dispatch(filterClose())}
                    className="cursor-pointer"
                  />
                </div>
              </section>
              <section className="filters overflow-y-scroll px-[2rem] py-[3rem] flex flex-col gap-[5rem] md:h-[70vh] h-screen">
                <div className="availability_container">
                  <button
                    onClick={() => setToggleSvg(!toggleSvg)}
                    className="availability w-full flex items-center justify-between"
                  >
                    <span className="block font-cooper font-bold">
                      Availability
                    </span>

                    {toggleSvg ? <Plus /> : <Minus />}
                  </button>
                  <div className="details">
                    {!toggleSvg && (
                      <div className="availability_details pt-[2rem]">
                        <div className="filter-box mb-[1.2rem] flex items-center gap-[.5rem]">
                          <div className="flex relative gap-[0.65rem] items-center justify-center">
                            <input
                              type="checkbox"
                              id="filter"
                              className="check_button w-[1.5rem] h-[1.5rem] appearance-none rounded-none shrink-0 checked:bg-white border-solid border-gray-300 dark:border-accent-8 dark:bg-cream  border-[1px] focus:outline-none peer cursor-pointer"
                            />
                            <label
                              htmlFor="filter"
                              className="text-lighter text-base font-light leading-3 cursor-pointer"
                            ></label>
                            <Check className="hidden bg-dark-green rounded-none w-[1.5rem] h-[1.5rem] peer-checked:block absolute pointer-events-none left-0" />
                          </div>
                          <span className="title block text-dark-green text-[1rem]">{`In stock (${118})`}</span>
                        </div>
                        <div className="container-element flex items-center gap-[.5rem]">
                          <div className="filter-box mb-[1.2rem] flex items-center gap-[.5rem]">
                            <div className="flex relative gap-[0.65rem] items-center justify-center">
                              <input
                                type="checkbox"
                                id="filter"
                                className="check_button w-[1.5rem] h-[1.5rem] appearance-none rounded-none shrink-0 checked:bg-white border-solid border-gray-300 dark:border-accent-8 dark:bg-cream  border-[1px] focus:outline-none peer cursor-pointer"
                              />
                              <label
                                htmlFor="filter"
                                className="text-lighter text-base font-light leading-3 cursor-pointer"
                              ></label>
                              <Check className="hidden bg-dark-green rounded-none w-[1.5rem] h-[1.5rem] peer-checked:block absolute pointer-events-none left-0" />
                            </div>
                            <span className="title block text-dark-green text-[1rem]">{`Out of stock (${18})`}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="price_container">
                  <button
                    onClick={() => setToggleSecondSvg(!toggleSecondSvg)}
                    className="price w-full flex items-center justify-between"
                  >
                    <span className="block font-cooper font-bold">Price</span>
                    {toggleSecondSvg ? <Plus /> : <Minus />}
                  </button>

                  <div className="details">
                    {!toggleSecondSvg && (
                      <div className="price_details">
                        <input type="range" className="w-full" />
                        <div className="input_flex flex items-center gap-[.5rem] justify-between">
                          <div className="group w-[48%]">
                            <label htmlFor="from">From</label>
                            <input
                              type="text"
                              placeholder="N"
                              className="w-full focus:border-dark-green focus:border-[3.4px] placeholder:text-dark-green hover:border-[3px] bg-transparent outline-none border-solid border-gray-300 border-[1px] p-[.8rem]"
                            />
                          </div>
                          <div className="group w-[48%]">
                            <label htmlFor="from">From</label>
                            <input
                              type="text"
                              placeholder="N"
                              className="w-full focus:border-dark-green focus:border-[3.4px] placeholder:text-dark-green hover:border-[3px] bg-transparent outline-none border-solid border-gray-300 border-[1px] p-[.8rem]"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              <section className="aside_footer sticky bottom-0 left-0 bg-primary w-full before:block before:w-full before:h-[.03rem] before:bg-gray-400">
                <div className="menu md:px-[2rem] px-[1rem] py-[1rem] w-full flex items-center justify-between gap-[1rem]">
                  <button className="md:text-[1rem] text-dark-green font-bold py-[.9rem] w-full flex items-center justify-center bg-transparent border-solid border-[1px] border-gray-300 rounded-[25px] font-cooper">
                    Clear all
                  </button>
                  <button className="md:text-[1rem] text-white font-bold py-[.9rem] w-full flex items-center justify-center bg-dark-green rounded-[25px] font-cooper">
                    Apply
                  </button>
                </div>
              </section>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterSide;
