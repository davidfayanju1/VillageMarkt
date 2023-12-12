import React, { useEffect, useState } from "react";
import {
  Cancel,
  Instagram,
  Mail,
  Telephone,
  Twitter,
  Down,
} from "../assets/svgs/svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleClose, toggleOpen } from "../redux/slices/toggleSlice";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ShopGrid from "./ShopGrid";
const Sidebar = () => {
  const { open } = useSelector((store) => store.toggle);
  const dispatch = useDispatch();

  const [sideOpen, setSideOpen] = useState(true);
  const [secondsideOpen, setSecondsideOpen] = useState(true);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [open]);

  const panel = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
    transition: { duration: 0.2 },
  };
  const panelBg = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.3 },
  };

  const linksAnim = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.6 } },
    transition: { duration: 0.3 },
  };

  // const linksAnim = {
  //   initial: { y: "-100%" },
  //   animate: { y: 0 },
  //   exit: { y: "-100%" },
  //   transition: { duration: 0.3 },
  // };

  const text = (delay) => {
    return {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.2, delay: delay },
    };
  };

  // links
  const links = [
    {
      name: "Grains",
      link: "/collections/Grains",
    },
    {
      name: "Oils",
      link: "/collections/Oils",
    },
    {
      name: "Proteins",
      link: "/collections/Protein",
    },
    {
      name: "Sea Foods",
      link: "/collections/Sea foods",
    },
    {
      name: "Soup Seeds",
      link: "/collections/Soup Seeds",
    },
    {
      name: "Spices",
      link: "/collections/Spices",
    },
    {
      name: "Tomatoes and Peppers",
      link: "/collections/tomatoes-and-peppers",
    },
    {
      name: "Tubers",
      link: "/collections/tubers",
    },
  ];
  return (
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <motion.div
          {...panelBg}
          className="aside_container fixed top-0 left-0 h-full w-full z-[900000] bg-black-overlay-2 overflow-hidden aside"
          // onClick={() => dispatch(toggleClose())}
        >
          <motion.aside
            {...panel}
            className="bg-primary overflow-x-hidden absolute top-0 left-0 h-screen pb-[3rem] md:w-[27rem] w-full z-[10000] overflow-y-scroll"
          >
            <div className="content w-full">
              <div className="stroke bg-primary sticky top-0 left-0 z-[10] md:w-[26.1rem] w-full after:block after:w-full after:h-[.03rem] after:bg-gray-400">
                <div className="menu md:px-[2rem] px-[1rem] py-[1rem] w-full flex items-center justify-between">
                  <span className="block font-cooper text-[1.2rem] font-bold text-dark-green">
                    Menu
                  </span>
                  <Cancel
                    onClick={() => dispatch(toggleClose())}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              {/* Links */}
              <section className="links md:px-[1.8rem] px-[1rem] py-[2rem] after:block after:w-full after:h-[.03rem] after:bg-gray-400">
                <div className="shop mb-[1rem]">
                  <motion.div
                    className="flex items-center justify-between"
                    onClick={() => setSideOpen(!sideOpen)}
                    {...text(0.1)}
                  >
                    <span className="block cursor-pointer font-cooper text-[1rem] font-bold text-dark-green">
                      Shop
                    </span>
                    <button>
                      <Down className={sideOpen ? "magic" : "unmagic"} />
                    </button>
                  </motion.div>
                  {!sideOpen && (
                    <div className="content min-h-[10rem] mt-[1rem]">
                      <ShopGrid />
                    </div>
                  )}
                </div>

                <Link to={"/"} onClick={() => dispatch(toggleClose())}>
                  <motion.div
                    {...text(0.2)}
                    className="block mb-[1rem] font-cooper text-[1rem] font-bold py-[.5rem] text-dark-green"
                  >
                    Home
                  </motion.div>
                </Link>
                <div className="categories mb-[1rem]">
                  <motion.div
                    {...text(0.3)}
                    className="flex items-center justify-between"
                    onClick={() => setSecondsideOpen(!secondsideOpen)}
                  >
                    <span className="block cursor-pointer font-cooper text-[1rem] font-bold text-dark-green">
                      Categories
                    </span>
                    <button>
                      <Down className={secondsideOpen ? "magic" : "unmagic"} />
                    </button>
                  </motion.div>
                  {!secondsideOpen && (
                    <motion.div
                      {...linksAnim}
                      className="content  min-h-[10rem] mt-[1.8rem] md:ml-[1.7rem] ml-[1rem] md:pr-[1.3rem]"
                    >
                      {links.map((link) => (
                        <Link
                          to={link.link}
                          onClick={() => dispatch(toggleClose())}
                          key={link.name}
                          className="block p-[.7rem] text-dark-green hover:bg-accent-green-2 text-[1.05rem]"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>

                <Link
                  to={"/contact-us"}
                  onClick={() => dispatch(toggleClose())}
                >
                  <motion.div
                    {...text(0.4)}
                    className="block mb-[1rem] font-cooper text-[1rem] font-bold py-[.5rem] text-dark-green"
                  >
                    Contact Us
                  </motion.div>
                </Link>

                <Link to={"/bundles"} onClick={() => dispatch(toggleClose())}>
                  <motion.div
                    {...text(0.5)}
                    className="block mb-[1rem] font-cooper text-[1rem] font-bold py-[.5rem] text-dark-green"
                  >
                    Bundles
                  </motion.div>
                </Link>
              </section>

              <motion.section
                {...text(1.1)}
                className="contact_us block md:px-[1.8rem] px-[1rem] mb-[2rem] after:block after:w-full after:h-[.03rem] after:bg-gray-400"
              >
                <span className="block font-cooper text-[1rem] font-bold mb-[2rem] text-dark-green">
                  Contact us
                </span>
                <Link
                  to={"tel:+2349068626856"}
                  className="flex mb-[1.6rem] items-center gap-[.6rem]"
                  onClick={() => dispatch(toggleClose())}
                >
                  <div className="h-[2rem] w-[2rem] flex items-center justify-center rounded-full bg-accent-yellow">
                    <Telephone />
                  </div>
                  <span className="block text-[.88rem]">+2349068626856</span>
                </Link>
                <Link
                  to={"mailto:villagemarkt@gmail.com"}
                  className="flex mb-[2rem] items-center gap-[.6rem]"
                  onClick={() => dispatch(toggleClose())}
                >
                  <div className="flex items-center justify-center h-[2rem] w-[2rem] rounded-full bg-accent-yellow">
                    <Mail />
                  </div>
                  <span className="block text-[.88rem]">
                    villagemarkts@gmail.com
                  </span>
                </Link>
              </motion.section>

              <motion.section
                {...text(1.1)}
                className="login md:px-[1.8rem] px-[1rem] mb-[3rem]"
              >
                <span className="flex items-center gap-[.4rem] mb-[1rem] text-dark-green">
                  Your account
                  <Link
                    to={"/login"}
                    className="font-cooper text-[.8rem] font-bold underline"
                  >
                    Login
                  </Link>
                </span>

                <div className="svg_container flex items-center gap-[1.1rem]">
                  <Link
                    to={
                      "https://x.com/village_markt?s=21&t=RBlzg-vTNvKp_c4goQwokg"
                    }
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
              </motion.section>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
