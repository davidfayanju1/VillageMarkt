import React, { useEffect, useState } from "react";
import CartEmpty from "./cart/CartEmpty";
import CartFilled from "./cart/CartFilled";
import { commerce } from "../lib/commerce";

const CartPage = () => {
  const smallCart = [
    {
      img: "https://cdn.shopify.com/s/files/1/0817/8122/7830/files/Bakedbeans.png?v=1697471180&width=300",
      name: "Baked beans",
      qty: 1,
      price: 595,
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0817/8122/7830/files/Bamasmall.png?v=1697471617&width=300",
      name: "Bama Mayonnaise",
      qty: 1,
      price: 1500,
    },
  ];

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
    <div className="cart_container">
      {smallCart.length === 0 ? (
        <CartEmpty cart={cart} />
      ) : (
        <CartFilled cart={cart.line_items} />
      )}
    </div>
  );
};

export default CartPage;
