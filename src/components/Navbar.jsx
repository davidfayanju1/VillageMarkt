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
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
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

      if (prevScroll < currentScroll) {
        setTop(false);
      } else if (window.scrollY >= 40 && prevScroll > currentScroll) {
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
      <section className="top_ad bg-lemon-accent w-full h-[2.5rem] py-[.5rem]">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000 }}
          className="nav-swiper"
          slidesPerView={1}
          loop={true}
          centeredSlides={false}
          speed={800}
        >
          <SwiperSlide>
            <p className="text-dark-green w-full text-center font-normal">
              From Farm To Your Doorstep
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to={"/"}
              className="block underline text-dark-green w-full text-center font-normal"
            >
              Free Delivery on N30,000 and over
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>
      <hgroup
        className={`z-[1000] md:px-[4rem] px-[1rem] py-[2rem] ${
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
              className="cursor-pointer"
              onClick={() => dispatch(toggleOpen())}
            />
          )}
          <Link to="/">
            <img
              src="https://villagemarkt.com/cdn/shop/files/vm_for_light_bg.png?v=1694611856"
              alt="logo-image"
              className="w-[2rem] h-[2rem]"
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
