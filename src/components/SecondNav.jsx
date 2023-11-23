import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BurgerDark,
  CartDark,
  Search,
  UserDark,
} from "../assets/svgs/svg-icons";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../redux/slices/toggleSlice";
import { AnimatePresence, motion } from "framer-motion";

const SecondNav = () => {
  const [fixed, setFixed] = useState(false);
  const [prevScroll, setPrevScroll] = useState(window.scrollY);
  const [top, setTop] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (prevScroll > currentScroll) {
        setFixed(true);
        setTop(true);
      } else {
        setFixed(false);
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll]);

  //   animation

  const animatenav = {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
    transition: { duration: 0.2 },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.hgroup
        className={` md:px-[4rem] px-[1rem] py-[1rem] bg-cream border-b-gray-200 border-b-[2px] ${
          fixed ? "sticky top-0 z-[100]" : "static"
        } left-0 w-full flex items-center justify-between`}
      >
        <div className="logo flex items-center gap-[2rem]">
          <BurgerDark
            className="cursor-pointer"
            onClick={() => dispatch(toggleOpen())}
          />

          <Link to="/">
            <img
              src="https://villagemarkt.com/cdn/shop/files/vm_for_light_bg.png?v=1694611856"
              alt="logo-image"
              className="w-[2.3rem] h-[3.2rem]"
            />
          </Link>
        </div>
        <div className="icons_section flex items-center gap-[1rem]">
          <Search />
          <div className="hidden md:block">
            <UserDark />
          </div>
          <CartDark />
        </div>
      </motion.hgroup>
    </AnimatePresence>
  );
};

export default SecondNav;
