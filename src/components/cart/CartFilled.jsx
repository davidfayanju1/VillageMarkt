import React from "react";

const CartFilled = () => {
  return (
    <div className="cart_items">
      {cart.map((item) => (
        <div className="item_card" key={item.id}></div>
      ))}
    </div>
  );
};

export default CartFilled;
