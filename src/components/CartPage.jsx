import React, { useEffect, useState } from "react";
import CartEmpty from "./cart/CartEmpty";
import CartFilled from "./cart/CartFilled";
import { commerce } from "../lib/commerce";

const CartPage = () => {
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
      {cart.length === 0 ? (
        <CartEmpty cart={cart} />
      ) : (
        <CartFilled cart={cart.line_items} loading={loading} realCart={cart} />
      )}
    </div>
  );
};

export default CartPage;
