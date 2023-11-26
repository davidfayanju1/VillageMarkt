import React, { useState } from "react";
import CartEmpty from "./cart/CartEmpty";
import CartFilled from "./cart/CartFilled";

const CartPage = () => {
  const cart = [];
  const [cartOpen, setCartOpen] = useState(true);
  return (
    <div className="cart_container">
      {cart.length === 0 ? (
        <CartEmpty cart={cart} setCartOpen={setCartOpen} cartOpen={cartOpen} />
      ) : (
        <CartFilled cart={cart} setCartOpen={setCartOpen} cartOpen={cartOpen} />
      )}
    </div>
  );
};

export default CartPage;
