import React, { useState, useEffect } from "react";
import {
  Burger,
  Cart,
  Search,
  User,
  SearchWhite,
  BurgerDark,
  UserDark,
  CartDark,
} from "../assets/svgs/svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../redux/slices/toggleSlice";

const Navbar = () => {
  const [fixed, setFixed] = useState(false);
  const [prevScroll, setPrevScroll] = useState(window.scrollY);
  const [top, setTop] = useState(true);
  const [hover, setHover] = useState(true);

  const dispatch = useDispatch();

  // nav color change logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (window.scrollY >= 25 && prevScroll < currentScroll) {
        setTop(false);
      } else if (window.scrollY >= 30 && prevScroll > currentScroll) {
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

  return (
    <nav>
      <hgroup
        className={`z-[1000] md:px-[4rem] px-[1rem] py-[1rem] ${
          fixed ? "bg-cream border-b-gray-200 border-b-[2px]" : "bg-transparent"
        } fixed ${fixed ? "top-[0px]" : "top-[2.5rem]"} left-0 w-full ${
          top ? "flex" : "hidden"
        } items-center justify-between`}
      >
        <div className="logo flex items-center gap-[2rem]">
          {fixed === true ? (
            <BurgerDark
              className="cursor-pointer"
              onClick={() => dispatch(toggleOpen())}
            />
          ) : (
            <Burger
              className="cursor-pointer text-[8rem]"
              onClick={() => dispatch(toggleOpen())}
            />
          )}
          <Link to="/">
            <img
              src="https://villagemarkt.com/cdn/shop/files/vm_for_light_bg.png?v=1694611856"
              alt="logo-image"
              className="w-[2rem] h-[3rem]"
            />
          </Link>
        </div>
        <div className="icons_section flex items-center gap-[1rem]">
          {fixed ? <Search /> : <SearchWhite />}
          <div className="hidden md:block">
            {fixed ? <UserDark /> : <User />}
          </div>
          {fixed ? <CartDark /> : <Cart />}
        </div>
      </hgroup>
    </nav>
  );
};

export default Navbar;
