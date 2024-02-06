import React, { useState, useEffect } from "react";
import useTitle from "../utils/useTitle";
import SecondLayout from "../layout/SecondLayout";
import { commerce } from "../lib/commerce";
import ClipLoader from "react-spinners/ClipLoader";
import { Bin, MinusIcon, PlusIcon } from "../assets/svgs/svg-icons";
import { Link } from "react-router-dom";
const Cart = () => {
  useTitle("Your Shoppiing Cart - Village Markt");
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchCart = async () => {
    try {
      const itemsCart = await commerce.cart.retrieve();
      setCart(itemsCart);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const [updateLoading, setUpdateLoading] = useState(false);
  const updateCart = async (productId, quantity) => {
    try {
      setUpdateLoading(true);
      const { cart } = await commerce.cart.update(productId, { quantity });
      setCart(cart);
    } catch (error) {
      console.log(error);
    } finally {
      setUpdateLoading(false);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      setUpdateLoading(true);
      const { cart } = await commerce.cart.remove(productId);
      setCart(cart);
    } catch (error) {
      console.log(error);
    } finally {
      setUpdateLoading(false);
    }
  };
  useEffect(() => {
    fetchCart();
  }, [cart]);

  return (
    <SecondLayout>
      <section className="cart-page min-h-screen bg-primary md:p-[2.8rem] p-[1.3rem]">
        {loading || updateLoading ? (
          <section className="text-center">
            <ClipLoader />
          </section>
        ) : (
          <section className=" w-full">
            <hgroup className="font-cooper mb-[3rem] font-bold md:text-[3rem] text-[1.3rem] text-center text-dark-green">{`Your cart (${
              cart === undefined ? 0 : cart.total_items
            })`}</hgroup>

            <section className="flex items-start justify-between md:flex-row flex-col gap-[2.4rem] w-full">
              <div className="mobile_view md:hidden w-full flex flex-col gap-[2rem]">
                {cart &&
                  cart.line_items?.map((item) => (
                    <div
                      className="items_card min-h-[8rem] border-b-[1px] border-gray-200 pb-[2rem]"
                      key={item.id}
                    >
                      <div className="product_card flex items-start justify-between">
                        <div className="flex items-start justify-start text-left gap-[.6rem] w-[40%]">
                          <img
                            src={item.image.url}
                            alt={item.name}
                            className="w-[5rem] h-[5rem] object-cover"
                          />
                          <div className="details_container flex flex-col gap-[3.3rem]">
                            <div className="text_container">
                              <span className="block text-gray-400 text-[.8rem]">
                                Village Markt
                              </span>
                              <span className="price font-cooper font-bold text-dark-green">
                                {item.name}
                              </span>
                            </div>
                            <div className="icons flex gap-[.3rem]">
                              <button
                                disabled={updateLoading}
                                className="plus_minus disabled:border-gray-200 disabled:cursor-not-allowed w-[6rem] border-solid rounded-full border-gray-300 border-[1px] flex items-center justify-between px-[.9rem]"
                              >
                                <span
                                  disabled={updateLoading}
                                  onClick={() =>
                                    updateCart(item.id, item.quantity - 1)
                                  }
                                >
                                  <MinusIcon />
                                </span>
                                <span className="block">{item.quantity}</span>
                                <span
                                  disabled={updateLoading}
                                  onClick={() =>
                                    updateCart(item.id, item.quantity + 1)
                                  }
                                >
                                  <PlusIcon />
                                </span>
                              </button>
                              <button
                                disabled={updateLoading}
                                onClick={() => removeFromCart(item.id)}
                                className="delete_icon disabled:bg-gray-300 border-solid border-[1px] border-gray-300 rounded-full w-[2.6rem] h-[2.6rem] flex items-center justify-center hover:border-black hover:transition-all hover:ease-in-out hover:delay-[.25s] transition-all ease-in-out delay-[.25s]"
                              >
                                <Bin />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="price text-right text-carpet-green font-semibold text-[1rem]">
                          {item.line_total.formatted_with_symbol}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="desktop_table w-[88%] md:block hidden">
                <table className="w-full">
                  <thead>
                    <tr className="text-left h-[3rem] border-b-[.0625rem] border-light-gray">
                      <th>Product</th>
                      <th>Quantity</th>
                      <th className="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart &&
                      cart.line_items?.map((item) => (
                        <tr
                          className="card align-middle border-b-[1px] border-t-[1px] h-[7.5rem] border-gray-300"
                          key={item.id}
                        >
                          <td className="align-middle">
                            <div className="image_container flex items-start gap-[.8rem]">
                              <img
                                src={item.image.url}
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
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">
                            <div className="icons flex gap-[.3rem]">
                              <button
                                disabled={updateLoading}
                                className="plus_minus disabled:border-gray-200 disabled:cursor-not-allowed w-[9rem] border-solid rounded-full border-gray-300 border-[1px] flex items-center justify-between px-[.9rem] py-[.2rem]"
                              >
                                <span
                                  disabled={updateLoading}
                                  onClick={() =>
                                    updateCart(item.id, item.quantity - 1)
                                  }
                                >
                                  <MinusIcon />
                                </span>
                                <span className="block">{item.quantity}</span>
                                <span
                                  disabled={updateLoading}
                                  onClick={() =>
                                    updateCart(item.id, item.quantity + 1)
                                  }
                                >
                                  <PlusIcon />
                                </span>
                              </button>
                              <button
                                disabled={updateLoading}
                                onClick={() => removeFromCart(item.id)}
                                className="delete_icon disabled:bg-gray-300 border-solid border-[1px] border-gray-300 rounded-full w-[2.6rem] h-[2.6rem] flex items-center justify-center hover:border-black hover:transition-all hover:ease-in-out hover:delay-[.25s] transition-all ease-in-out delay-[.25s]"
                              >
                                <Bin />
                              </button>
                            </div>
                          </td>
                          <td>
                            <div className="price text-right text-carpet-green font-semibold text-[1rem]">
                              {item.line_total.formatted_with_symbol}
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="total-amount md:w-[40%] w-full">
                <div className="progress mb-[1.4rem] ">
                  <span className="block text-dark-green text-[.92rem]">
                    Your order qualifies for free shipping
                  </span>
                  <div className="items_flex flex items-center justify-center gap-[.7rem]">
                    <div className="progressbar overflow-hidden w-[90%] bg-gray-200 rounded-full h-[.55rem]">
                      <div
                        className={`bar bg-carpet-green rounded-full w-[${
                          cart && !cart ? cart.subtotal.raw : 100 / 100
                        }%] h-full`}
                      ></div>
                    </div>
                    <span className="block text-dark-green">100.00NGN</span>
                  </div>
                </div>
                <section className="cart-footer w-full flex flex-col pt-[1rem]">
                  <div className="total_amount w-full font-cooper font-bold text-[1.1rem] flex items-center justify-between">
                    <span className="block font-cooper">Total</span>
                    <span className="block font-cooper text-carpet-green">
                      {cart && cart.subtotal.formatted_with_symbol}
                    </span>
                  </div>
                  <div className="menu pt-[1rem] w-full flex items-center justify-between gap-[1rem] flex-col">
                    <button className="md:text-[1rem] text-white font-bold py-[.7rem] w-full flex items-center justify-center bg-accent-green hover:opacity-[.9] hover:transition-all hover:ease-in-out hover:delay-[.25s] hover:border-solid hover:border-[1.4px] hover:border-gray-300 rounded-[25px] font-cooper">
                      Checkout
                    </button>
                    <Link
                      to="/products"
                      className="text-dark-green underline font-cooper text-[.85rem] font-bold"
                    >
                      Continue Shopping
                    </Link>
                    <small className="mt-[.35rem] text-gray-400 text-center w-[80%]">
                      Tax included and shipping calculated at checkout
                    </small>
                  </div>
                </section>
              </div>
            </section>
          </section>
        )}
      </section>
    </SecondLayout>
  );
};

export default Cart;
