import React, { useEffect } from "react";
import { Cancel, Search } from "../assets/svgs/svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { navClose } from "../redux/slices/navToggle";
import { AnimatePresence, motion } from "framer-motion";

const SearchModal = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((store) => store.navToggle);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [open]);
  // desktop
  const openTop = {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
    transition: { duration: 0.2 },
  };
  const overlayOpacity = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.3 },
  };

  // mobile
  const openRight = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
    transition: { duration: 0.2 },
  };
  return (
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <motion.div
          {...overlayOpacity}
          className="desktop_search fixed top-0 left-0 h-full bg-black-overlay-2 w-full z-[10000]"
        >
          <motion.div
            {...openTop}
            className="search_container absolute top-0 left-0 w-full md:h-[23.8vh] h-full bg-white"
          >
            <div className="input_area px-[2rem] flex items-center justify-center gap-[.7rem] border-b-[1px] border-gray-300 md:h-[50%] h-[4rem]">
              <Search className="cursor-pointer" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none text-[16px] w-[90%] rounded-[2px] focus:border-dark-green focus:border-solid focus:border-[2px] px-[.8rem] py-[.35rem]"
                autoFocus
              />
              <Cancel
                onClick={() => dispatch(navClose())}
                className="cursor-pointer"
              />
            </div>
            <div className="second_area w-full text-center pt-[1rem] flex flex-col justify-center items-center text-gray-400">
              Enter keyword to see quick results
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
