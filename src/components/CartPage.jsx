import React, { useState } from "react";
import CartEmpty from "./cart/CartEmpty";
import CartFilled from "./cart/CartFilled";

const CartPage = () => {
  const cart = [
    {
      img: "https://cdn.shopify.com/s/files/1/0817/8122/7830/files/Bakedbeans.png?v=1697471180&width=300",
      name: "Baked beans",
      gty: 1,
      price: 595,
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0817/8122/7830/files/Bamasmall.png?v=1697471617&width=300",
      name: "Bama Mayonnaise",
      gty: 1,
      price: 1500,
    },
  ];
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
