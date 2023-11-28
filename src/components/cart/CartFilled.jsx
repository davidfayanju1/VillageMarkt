import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bin, Cancel, MinusIcon, PlusIcon } from "../../assets/svgs/svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartClose } from "../../redux/slices/cartToggle";
import { Link } from "react-router-dom";

const CartFilled = ({ cart }) => {
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
              <div className="menu md:px-[1.5rem] px-[1rem] py-[1rem] w-full flex items-center justify-between">
                <span className="block font-cooper text-[1.2rem] font-bold text-dark-green">
                  {`Cart (${cart.length})`}
                </span>
                <Cancel
                  onClick={() => dispatch(cartClose())}
                  className="cursor-pointer"
                />
              </div>
            </section>
            <section className="cards overflow-y-scroll overflow-hidden p-[1.5rem] md:h-[55vh] h-[60vh]">
              {/* progress bar */}
              <div className="progress mb-[1.4rem] after:mt-[2rem] after:w-full after:h-[.05rem] after:bg-gray-300 after:block">
                <span className="block text-dark-green text-[.92rem]">
                  Your order qualifies for free shipping
                </span>
                <div className="items_flex flex items-center justify-center gap-[.7rem]">
                  <div className="progressbar overflow-hidden w-[90%] bg-gray-200 rounded-full h-[.55rem]">
                    <div
                      className={`bar bg-carpet-green rounded-full w-[${100}%] h-full`}
                    ></div>
                  </div>
                  <span className="block text-dark-green">N100.00NGN</span>
                </div>
              </div>
              {cart.map((item) => (
                <div
                  className="item_card mb-[1.4rem] after:mt-[2rem] after:w-full after:h-[.05rem] after:bg-gray-200 after:block"
                  key={item.id}
                >
                  <div className="card_details flex items-start justify-between">
                    <div className="items-container">
                      <div className="image_container flex items-start gap-[.8rem]">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-[5rem] h-[5rem] object-cover"
                        />
                        <div className="details_container">
                          <span className="block text-gray-400 text-[.8rem]">
                            Village Markt
                          </span>
                          <span className="price font-cooper font-bold text-dark-green">
                            {item.name}
                          </span>
                          <div className="icons mt-[2rem] flex gap-[.3rem]">
                            <div className="plus_minus w-[9rem] border-solid rounded-full border-gray-300 border-[1px] flex items-center justify-between px-[.9rem] py-[.2rem]">
                              <button>
                                <MinusIcon />
                              </button>
                              <span className="block">{item.qty}</span>
                              <button>
                                <PlusIcon />
                              </button>
                            </div>
                            <button className="delete_icon border-solid border-[1px] border-gray-300 rounded-full w-[2.6rem] h-[2.6rem] flex items-center justify-center hover:border-black hover:transition-all hover:ease-in-out hover:delay-[.25s] transition-all ease-in-out delay-[.25s]">
                              <Bin />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="price text-carpet-green font-semibold text-[1rem]">
                      N{item.price}.00NGN
                    </div>
                  </div>
                </div>
              ))}

              <div className="order_note">
                <span className="block font-cooper font-bold"></span>
              </div>
            </section>

            <section className="cart-footer sticky bottom-0 left-0 w-full border-t-[1.2px] border-gray-300 flex flex-col h-[6rem] md:px-[1.5rem] px-[1rem] pt-[1rem]">
              <div className="total_amount w-full font-cooper font-bold text-[1.1rem] flex items-center justify-between">
                <span className="block font-cooper">Total</span>
                <span className="block font-cooper text-carpet-green">
                  NTotal money
                </span>
              </div>
              <div className="menu pt-[1rem] w-full flex items-center justify-between gap-[1rem]">
                <Link
                  to={"/cart"}
                  onClick={() => dispatch(cartClose())}
                  className="md:text-[1rem] text-dark-green hover:border-black hover:border-[1px] hover:transition-all hover:ease-in-out hover:delay-[.25s] font-bold py-[.7rem] w-full flex items-center justify-center bg-transparent border-solid border-[1px] border-gray-300 rounded-[25px] font-cooper"
                >
                  View Cart
                </Link>
                <button className="md:text-[1rem] text-white font-bold py-[.7rem] w-full flex items-center justify-center bg-accent-green hover:opacity-[.9] hover:transition-all hover:ease-in-out hover:delay-[.25s] hover:border-solid hover:border-[1.4px] hover:border-gray-300 rounded-[25px] font-cooper">
                  Checkout
                </button>
              </div>
              <small className="mt-[.35rem] text-gray-400 text-center">
                Tax included and shipping calculated at checkout
              </small>
            </section>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartFilled;
