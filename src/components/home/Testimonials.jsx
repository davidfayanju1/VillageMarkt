import React from "react";
import { Quote } from "../../assets/svgs/svg-icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const testomonials = [
    {
      pic: "https://villagemarkt.com/cdn/shop/files/Frame_175.jpg?v=1697537464&width=450",
      name: "Mrs Abiola",
      profession: "Doctor",
      comment:
        "Thanks for this business. It has made my life so much easier and you are prompt and responsive",
    },
    {
      pic: "https://villagemarkt.com/cdn/shop/files/Frame_177.jpg?v=1697537465&width=450",
      name: "Mrs Ann",
      profession: "Customer",
      comment:
        'I received another batch of goods from village Markt today, as-per my usual monthly shopping. All i can say is "Fresh products as always"',
    },
    {
      pic: "https://villagemarkt.com/cdn/shop/files/Frame_174.jpg?v=1697537464&width=450",
      name: "Wine enthusiast",
      profession: "Doctor",
      comment:
        "I need to recommend to more people and it makes sense to use nylon than zip bags....cheaper and I really love that you started using a lovely carrier bag... and veg are looking very fresh....well done....my coz loves what you do too....👍🏾👏🏾👏🏾👏🏾👏🏾👏🏾",
    },
    {
      pic: "https://villagemarkt.com/cdn/shop/files/Frame_173.jpg?v=1697537458&width=450",
      name: "Customer",
      profession: "Doctor",
      comment:
        "The prompt same day delivery is always what excites me about shopping with Village markt",
    },
    {
      pic: "https://villagemarkt.com/cdn/shop/files/Frame_176.jpg?v=1697537465&width=450",
      name: "Mr Adeoye",
      profession: "Customer",
      comment:
        'I shopped for all my Traditional wedding items popularly known as "Eru Iyawo", and the price slash was amazing',
    },
  ];
  return (
    <section className=" py-[2rem] md:min-h-[45rem] bg-primary">
      <hgroup className="md:px-[4rem] px-[2rem] font-cooper mb-[4rem] md:font-semibold font-medium md:text-[4vw] text-[2rem] text-dark-green">
        Testimonials
      </hgroup>

      <Swiper
        keyboard={true}
        mousewheel={true}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={-220}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          // when window width is >= 640px
          340: {
            slidesPerView: 1,
            spaceBetween: -107,
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
        {testomonials.map((testimonial) => (
          <SwiperSlide>
            <div
              className="testimonials_card md:w-[188px] w-[200px]"
              key={testimonial.name}
            >
              <div className="author-pic relative w-[10rem] h-[10rem] rounded-bl-[0rem] rounded-full overflow-hidden mb-[.5rem] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[2] before:content-[''] before:bg-gradient-to-b before:from-black-overlay-light before:to-black-overlay">
                <img
                  src={testimonial.pic}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <Quote className="absolute bottom-0 left-0" />
              </div>
              <span className="block name font-cooper font-semibold text-[1.1rem]">
                {testimonial.name}
              </span>
              <small className="profession text-gray-400">
                {testimonial.profession}
              </small>
              <blockquote className="comment">{testimonial.comment}</blockquote>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
