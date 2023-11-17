import React from "react";
import {
  Instagram,
  Mail,
  Telephone,
  ToTop,
  Twitter,
} from "../assets/svgs/svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="md:px-[4rem] px-[1.5rem] py-[2rem] bg-primary">
      <section
        onClick={scrollTop}
        className="to-top cursor-pointer mb-[3rem] flex items-center justify-start"
      >
        <span className="block underline text-dark-green font-serif text-[1.1rem]">
          Back to Top
        </span>
        <ToTop />
      </section>
      <section className="section-container flex flex-wrap  items-start justify-between gap-[2rem]">
        <div className="section_container md:w-[25%]">
          <div className="about">
            <span className="block font-serif text-dark-green text-[1.1rem]">
              About our store
            </span>
            <img
              src="https://villagemarkt.com/cdn/shop/files/vm_for_light_bg.png?v=1694611856"
              alt="logo-image"
              className="w-[2.3rem] h-[3.3rem] my-[2.5rem]"
            />
            <span className="block w-[80%] mb-[2rem]">
              Every day is an evolution. Since our launch in 2022, we've
              explored and curated products for your continual nourishments - on
              all emotional, healthy and belly-filling level.
            </span>
          </div>
          <div className="contact_us ">
            <span className="block font-serif mb-[2rem] text-[1.1rem] text-dark-green">
              Contact us
            </span>
            <Link
              to={"tel:+2349068626856"}
              className="flex mb-[1.6rem] items-center gap-[.6rem]"
            >
              <div className="h-[2rem] w-[2rem] flex items-center justify-center rounded-full bg-accent-yellow">
                <Telephone />
              </div>
              <span className="block text-[.88rem]">+2349068626856</span>
            </Link>
            <Link
              to={"mailto:villagemarkt@gmail.com"}
              className="flex items-center gap-[.6rem]"
            >
              <div className="flex items-center justify-center h-[2rem] w-[2rem] rounded-full bg-accent-yellow">
                <Mail />
              </div>
              <span className="block text-[.88rem]">
                villagemarkts@gmail.com
              </span>
            </Link>
          </div>
        </div>

        <div className="collection">
          <span className="block mb-[1.4rem] font-serif text-[1.1rem] font-medium">
            Collection
          </span>
          <Link to={"/search"} className="block mb-[1rem] hover:underline">
            Search
          </Link>
          <Link to={"/collection/all"} className="block hover:underline">
            All collections
          </Link>
        </div>
        <div className="help">
          <span className="block mb-[1.4rem] font-serif text-[1.1rem] text-dark-green">
            Need Help?
          </span>
          <Link to={"/"} className="block hover:underline">
            Home
          </Link>
          <Link to={"/categories"} className=" my-[1rem] block hover:underline">
            Categories
          </Link>
          <Link to={"/contact-us"} className="block mb-[1rem] hover:underline">
            Contact Us
          </Link>
          <Link to={"/bundles"} className="block hover:underline">
            Bundles
          </Link>
        </div>

        <div className="newsletter">
          <div className="new-letter mb-[2rem] md:w-[16rem] min-h-[10rem] py-[2rem] px-[1.3rem] bg-dark-green">
            <h2 className="title font-serif text-[1.3rem] text-white mb-[.8rem]">
              Newsletter
            </h2>
            <span className="block text-white mb-[.8rem]">
              subscribing to our newsletter guarantees you never miss out on our
              giveaways
            </span>
            <form>
              <input
                type="text"
                className="w-full mb-[1rem] outline-none px-[1.1rem] py-[1rem] placeholder:text-[1.05rem] placeholder:text-gray-300 text-gray-400"
                placeholder="Enter your email address"
              />
              <button
                type="submit"
                className="font-serif text-dark-green bg-white w-full rounded-full py-[1rem] text-[1.2rem] font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="follow_us flex flex-col md:items-start items-center">
            <span className="block title font-bold text-[1.1rem] text-dark-green font-serif mb-[1.1rem]">
              Follow us
            </span>
            <div className="svg_container flex items-center gap-[1.1rem]">
              <Link
                to={"https://x.com/village_markt?s=21&t=RBlzg-vTNvKp_c4goQwokg"}
                className="w-[3rem] h-[3rem] flex items-center justify-center bg-accent-green hover:opacity-[.8] hover:border-solid hover:border-[2px] hover:border-gray-400 hover:transition-all hover:delay-[.25s] hover:ease-in-out transition-all delay-[.25s] ease-in-out font-serif text-white font-semibold text-[1.1rem] rounded-full py-[.7rem] text-center"
              >
                <Twitter />
              </Link>
              <Link
                to={"http://instagram.com/villagemarkt"}
                className="w-[3rem] h-[3rem] flex items-center justify-center bg-accent-green hover:opacity-[.8] hover:border-solid hover:border-[2px] hover:border-gray-400 hover:transition-all hover:delay-[.25s] hover:ease-in-out transition-all delay-[.25s] ease-in-out font-serif text-white font-semibold text-[1.1rem] rounded-full py-[.7rem] text-center"
              >
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="copyright flex md:items-end items-center md:justify-end justify-center mt-[6rem]">
        <span className="block text-gray-400 text-[.8rem]">
          © Village Markt • Powered by Shopify
        </span>
      </section>
    </footer>
  );
};

export default Footer;
