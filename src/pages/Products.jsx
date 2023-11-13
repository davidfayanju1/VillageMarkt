import React, { useState, useEffect } from "react";

const Products = () => {
  const title = "Products - village Markt";

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <hgroup className="font-serif text-[2rem]">Products</hgroup>
    </div>
  );
};

export default Products;
