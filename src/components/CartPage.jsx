import React, { useState } from "react";
import CartEmpty from "./cart/CartEmpty";
import CartFilled from "./cart/CartFilled";

const CartPage = () => {
  const cart = [];
  return (
    <div className="cart_container">
      {cart.length === 0 ? (
        <CartEmpty cart={cart} />
      ) : (
        <CartFilled cart={cart} />
      )}
    </div>
  );
};

export default CartPage;
