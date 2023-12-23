import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bag } from "../../assets/svgs/svg-icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductCard = () => {
  const [change, setChange] = useState("");

  const cardElements = [
    {
      id: 1,
      name: "Green Apples",
      url: "https://villagemarkt.com/cdn/shop/files/Greenapples.png?v=1697468867&width=750",
      url2: "https://villagemarkt.com/cdn/shop/files/cllcy9htp00000fl0eqv53n9i.jpg?v=1697468867&width=750",
      price: "N750.00",
    },
    {
      id: 2,
      name: "Red Apples",
      url: "https://villagemarkt.com/cdn/shop/files/RedApples.png?v=1697468993&width=750",
      url2: "https://villagemarkt.com/cdn/shop/files/large-b11a95cd-6c86-46bd-8d0e-de0b6e6e91df.jpg?v=1697468993&width=750",
      price: "N800.00",
    },
    {
      id: 4,
      name: "Carrots",
      url: "https://villagemarkt.com/cdn/shop/files/Carrots.png?v=1697471036&width=750",
      url2: "https://img.freepik.com/free-photo/baby-carrots_1339-7954.jpg?size=626&ext=jpg",
      price: "N600.00",
    },
  ];

  return (
    <section className="products-card mx-auto">
      <section className="desktop_view px-[3.6rem] hidden md:flex items-center justify-center mx-auto gap-[2rem]">
        {cardElements?.map((element) => (
          <div
            className="card relative cursor-pointer w-[400px] h-[22.52rem] after:absolute after:top-0 after:left-0 after:w-full after:h-full mb-[4rem] after:z-[1] after:bg-gradient-to-b after:from-black-overlay-light after:to-black-overlay"
            key={element.name}
            onMouseEnter={() => setChange(element.id)}
            onMouseLeave={() => setChange("")}
          >
            <Link to={`/products/${element.name}`}>
              <img
                src={change === element.id ? element.url2 : element.url}
                alt={element.name}
                className={`h-full w-full object-cover relative mb-[8rem] z-[1] ${
                  change === element.id
                    ? "transition-all delay-[.25s] ease-in-out"
                    : ""
                }`}
              />
            </Link>
            <div className="details-container absolute md:top-[62%] md:left-[6%] top-[50%] left-[6%] z-[6] w-[89%]">
              <Link to={`/products/${element.name}`}>
                <small className="text-gray-200">Village Markt</small>
                <span className="block name font-cooper text-white text-[1.2rem] font-[600]">
                  {element.name}
                </span>
              </Link>
              <span className="block text-white">From {element.price}</span>
              <div className="flex items-end justify-end w-full">
                <button className="flex items-center justify-center hover:opacity-[.9] transition-all delay-[.5sec] ease-in-outs h-[2.75rem] w-[2.75rem] rounded-full bg-white border-solid border-[1.5px] border-gray-400 hover:border-gray-500">
                  <Bag />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="products_mobile md:hidden block">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          spaceBetween={-20}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            // when window width is >= 640px
            340: {
              slidesPerView: 1,
              spaceBetween: -67,
            },

            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
            2024: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper"
        >
          {cardElements?.map((element) => (
            <SwiperSlide>
              <div
                className="card relative h-[18rem] w-[18rem] after:absolute after:top-0 after:left-0 after:w-full after:h-full mb-[4rem] after:z-[1] after:bg-gradient-to-b after:from-black-overlay-light after:to-black-overlay"
                key={element.name}
                onMouseEnter={() => setChange(element.id)}
                onMouseLeave={() => setChange("")}
              >
                <Link to={`/products/${element.name}`}>
                  <img
                    src={change === element.id ? element.url2 : element.url}
                    alt={element.name}
                    className={`h-full w-full object-cover relative mb-[8rem] z-[1] ${
                      change === element.id
                        ? "transition-all delay-[.25s] ease-in-out"
                        : ""
                    }`}
                  />
                </Link>
                <div className="details-container absolute md:top-[62%] md:left-[6%] top-[50%] left-[6%] z-[6] w-[89%]">
                  <Link to={`/products/${element.name}`}>
                    <small className="text-gray-200">Village Markt</small>
                    <span className="block name font-cooper text-white text-[1.2rem] font-[600]">
                      {element.name}
                    </span>
                  </Link>
                  <span className="block text-white">From {element.price}</span>
                  <div className="flex items-end justify-end w-full">
                    <button className="flex items-center justify-center hover:opacity-[.9] transition-all delay-[.5sec] ease-in-outs h-[2.75rem] w-[2.75rem] rounded-full bg-white border-solid border-[1.5px] border-gray-400 hover:border-gray-500">
                      <Bag />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default ProductCard;
