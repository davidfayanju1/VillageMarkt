import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const TopNav = () => {
  return (
    <section className="top_ad bg-lemon-accent w-full h-[2.5rem] py-[.5rem] md:px-[2.5rem]">
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
            className="block underline text-dark-green w-full text-center md:font-normal font-light"
          >
            Free Delivery on N30,000 and over
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TopNav;
