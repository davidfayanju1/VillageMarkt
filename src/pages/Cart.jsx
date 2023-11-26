import React from "react";
import useTitle from "../utils/useTitle";
import SecondLayout from "../layout/SecondLayout";

const Cart = () => {
  useTitle("Your Shoppiing Cart - Village Markt");
  return (
    <SecondLayout>
      <section className="cart-page min-h-screen bg-primary md:p-[2rem] p-[1.3rem]">
        <hgroup className="font-cooper font-bold md:text-[2rem] text-[1.3rem]">{`Your cart ${2}`}</hgroup>
      </section>
    </SecondLayout>
  );
};

export default Cart;
