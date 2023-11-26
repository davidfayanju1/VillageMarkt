import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cancel } from "../../assets/svgs/svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartClose } from "../../redux/slices/cartToggle";

const CartEmpty = () => {
  const { open } = useSelector((store) => store.cartToggle);
  const dispatch = useDispatch();
  const panel = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { duration: 0.2 },
  };
  const panelBg = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.3 },
  };
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [open]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <motion.div
          {...panelBg}
          className="aside_container fixed top-0 right-0 h-full w-full z-[900000] bg-black-overlay-2 overflow-hidden aside"
        >
          <motion.aside
            {...panel}
            className="bg-primary overflow-hidden absolute top-0 right-0 h-screen pb-[3rem] md:w-[27rem] w-full z-[10000]"
          >
            <section className="bg-primary w-full after:block after:w-full after:h-[.03rem] after:bg-gray-400">
              <div className="menu md:px-[2rem] px-[1rem] py-[1rem] w-full flex items-center justify-between">
                <span className="block font-cooper text-[1.2rem] font-bold text-dark-green">
                  Cart
                </span>
                <Cancel
                  onClick={() => dispatch(cartClose())}
                  className="cursor-pointer"
                />
              </div>
            </section>
            <div className="items_container bg-primary flex flex-col gap-[2rem] h-full items-center justify-center">
              <span className="block font-cooper text-[1.4rem] font-bold">
                Your cart is empty
              </span>
              <Link
                to={"/"}
                className="md:text-[1rem] text-white font-bold py-[.9rem] w-[13rem] flex items-center justify-center hover:opacity-[.8] hover:border-solid hover:border-[2px] hover:border-gray-400 hover:transition-all hover:delay-[.25s] hover:ease-in-out transition-all delay-[.25s] ease-in-out bg-accent-green rounded-[25px] font-cooper"
              >
                Continue Shopping
              </Link>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartEmpty;
