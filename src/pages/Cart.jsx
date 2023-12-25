import React, { useState, useEffect } from "react";
import useTitle from "../utils/useTitle";
import SecondLayout from "../layout/SecondLayout";
import { commerce } from "../lib/commerce";
import ClipLoader from "react-spinners/ClipLoader";

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

  useEffect(() => {
    fetchCart();
  }, [cart]);
  return (
    <SecondLayout>
      <section className="cart-page min-h-screen bg-primary md:p-[2.8rem] p-[1.3rem]">
        {loading ? (
          <section className="text-center">
            <ClipLoader />
          </section>
        ) : (
          <hgroup className="font-cooper font-bold md:text-[3rem] text-[1.3rem] text-center text-dark-green">{`Your cart (${cart.line_items.length})`}</hgroup>
        )}
      </section>
    </SecondLayout>
  );
};

export default Cart;
