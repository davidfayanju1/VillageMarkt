import React from "react";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <section className=" md:h-[29rem] bg-primary h-[88vh] w-full flex items-center justify-center">
      <div className="card bg-black relative flex items-center w-full h-full justify-center after:absolute after:top-0 after:left-0 after:w-full after:h-full mb-[4rem] after:z-[1] after:bg-gradient-to-b after:from-black-overlay-light after:to-black-overlay">
        <div className="absolute top-0 left-0 overflow-hidden w-full h-full">
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            loop="loop"
            preload="none"
            muted="muted"
            poster="//villagemarkt.com/cdn/shop/files/preview_images/64adab73e148418db873388db0761837.thumbnail.0000000000_small.jpg?v=1697538338"
            src="https://cdn.shopify.com/videos/c/vp/64adab73e148418db873388db0761837/64adab73e148418db873388db0761837.HD-1080p-2.5Mbps-19534149.mp4"
            className="h-full w-full object-cover"
          >
            <source
              data-src="https://cdn.shopify.com/videos/c/vp/64adab73e148418db873388db0761837/64adab73e148418db873388db0761837.HD-1080p-2.5Mbps-19534149.mp4"
              type="video/mp4"
            ></source>
            <img src="//villagemarkt.com/cdn/shop/files/preview_images/64adab73e148418db873388db0761837.thumbnail.0000000000_small.jpg?v=1697538338"></img>
          </video>
        </div>
        <div className="details-container absolute top-[12%] left-[6%] z-[6] w-[89%]">
          <section className="flex items-center justify-center mb-[6rem] w-full">
            <hgroup className="w-full flex flex-col items-center justify-center text-center">
              <span className="block text-light-green text-center mb-[1rem] md:text-[1.05rem]">
                HEALTHY WHOLEFOODS FROM THE FARM
              </span>
              <h2 className="mb-[1.5rem] text-white font-serif text-center md:text-[3.4vw] text-[1.8rem] md:font-medium font-normal">
                It pays to eat Healthy
              </h2>
              <p className=" text-white text-[1rem] max-w-[30rem] w-[90%] text-center font-bold">
                Embrace a healthier lifestyle with our wholefoods store,
                offering an array of wholesome products to support your
                well-being.
              </p>
              <div className="button_flex flex md:flex-row flex-col items-center justify-center w-[50%] gap-[1rem] mt-[3rem]">
                <Link
                  to={"/products/all"}
                  className="md:text-[1.2rem] text-white font-medium py-[.7rem] md:px-[2.3rem] px-[1.5rem] flex items-center justify-center bg-dark-green rounded-[25px] font-serif md:min-w-[7rem]"
                >
                  Discover
                </Link>
                <Link
                  to={"/products/"}
                  className="md:text-[1.2rem] text-dark-green font-medium py-[.7rem] md:px-[2rem] px-[1.5rem] flex items-center justify-center bg-white rounded-[25px] font-serif md:min-w-[7rem]"
                >
                  Eat Healthy
                </Link>
              </div>
            </hgroup>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Video;
