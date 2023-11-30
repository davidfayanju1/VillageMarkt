import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Categories = () => {
  const productsCategories = [
    {
      img: "https://villagemarkt.com/cdn/shop/collections/Fruits_cover.png?v=1697479233",
      category: "Fruits",
      quantity: 20,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/collections/Oils_cover.png?v=1697479708&width=450",
      category: "Oils",
      quantity: 11,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/collections/WhatsApp_Image_2023-10-15_at_14.18.11.jpg?v=1697376135",
      category: "Grains",
      quantity: 20,
    },
    {
      img: "https://villagemarkt.com/cdn/shop/collections/Goat_meat.png?v=1697479476",
      category: "Protein",
      quantity: 20,
    },
  ];

  return (
    <section className="md:min-h-[70rem] pb-[4rem] bg-primary">
      <section className="flex md:px-[2.6rem] px-[1rem] items-center justify-center mb-[3rem]">
        <hgroup className="md:max-w-[55%] w-full flex flex-col justify-center items-center text-center">
          <span className="block text-light-green text-center mb-[1rem] md:text-[1rem] text-[.9rem]">
            WE HAVE CAREFULLY CURATED SOME AMAZING PRODUCTS WITH LOVE IN OUR
            HEARTS.
          </span>
          <h2 className="mb-[1.5rem] font-cooper text-center md:text-[3.9vw] text-dark-green text-[1.5rem] font-semibold">
            Choose from our extensive range of products categories
          </h2>
          <p className="text-[1rem] font-normal md:w-[86%] text-center text-dark-green">
            Whether you are a Vegan or a Meat lover. We have all you'll need all
            year round. We are every mothers first home choice
          </p>
        </hgroup>
      </section>
      {/* product categories */}
      <div className="flex items-start justify-start md:px-[3.3rem] mb-[-3rem] w-full">
        <div className="asterisk_content h-[10rem] w-[10rem] rounded-full bg-light-green-2 flex items-center justify-center z-[2]">
          <span className="font-cooper text-[1rem] font-bold w-[50%] text-center text-white">
            Fresh Farm Food
          </span>
        </div>
      </div>

      {/*  products*/}
      <div className="desktop_products_container md:px-[2.6rem] hidden md:flex items-center justify-center gap-[1.8rem]">
        {productsCategories.map((product) => (
          <div className="container overflow-hidden h-[24.52rem] w-[18.8rem] transition-transform delay-[0.25sec] ease-in-out">
            <div
              className="card_overlay relative overflow-hidden cursor-pointer h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full mb-[4rem] before:z-[2] before:content-[''] before:bg-gradient-to-b before:from-black-overlay-light before:to-black-overlay"
              key={product.img}
            >
              <div className="image-container w-full h-full overflow-hidden">
                <img
                  src={product.img}
                  alt={product.category}
                  className="image hover:scale-[1.1] transition-transform delay-[0.25sec] ease-in-out h-full w-full object-cover relative mb-[8rem] z-[1]"
                />
              </div>
              <div className="details-container absolute top-[75%] left-[6%] z-[6] w-[89%] text-center">
                <span className="block name font-cooper text-white text-[1.3rem] font-[600]">
                  {product.category}
                </span>
                <Link
                  to={`/product/${product.category}`}
                  className="text-white underline font-cooper text-[1rem] font-bold"
                >
                  View {product.quantity} products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* mobile */}
      <div className="mobile_products_container md:hidden flex items-center justify-center gap-[1.8rem]">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          spaceBetween={-75}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            // when window width is >= 640px
            340: {
              slidesPerView: 1,
              spaceBetween: -197,
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
          {productsCategories.map((product) => (
            <SwiperSlide>
              <div className="container overflow-hidden h-[14rem] w-[10rem]  transition-transform delay-[0.25sec] ease-in-out">
                <div
                  className="card relative overflow-hidden cursor-pointer h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full mb-[4rem] before:z-[2] before:content-[''] before:bg-gradient-to-b before:from-black-overlay-light before:to-black-overlay"
                  key={product.img}
                >
                  <div className="image-container w-full h-full overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.category}
                      className="image hover:scale-[1.1] transition-transform delay-[0.25sec] ease-in-out h-full w-full object-cover relative mb-[8rem] z-[1]"
                    />
                  </div>
                  <div className="details-container absolute top-[62%] left-[6%] z-[6] w-[89%] text-center">
                    <span className="block name font-serif text-white text-[1.2rem] font-[500]">
                      {product.category}
                    </span>
                    <Link
                      to={`/product/${product.category}`}
                      className="text-white underline font-serif text-[1rem]"
                    >
                      View {product.quantity} products
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <section className="more_collection_button flex  items-center justify-center w-full mt-[6rem]">
        <Link
          to={"/collections"}
          className="green-button block bg-accent-green hover:opacity-[.8]  hover:transition-all hover:delay-[.25s] hover:ease-in-out transition-all delay-[.25s] ease-in-out font-cooper text-white font-semibold text-[1.1rem] max-w-[13rem] rounded-full py-[.7rem] w-[90%] text-center"
        >
          View all collections
        </Link>
      </section>
    </section>
  );
};

export default Categories;
