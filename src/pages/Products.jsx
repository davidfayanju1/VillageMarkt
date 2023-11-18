import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import useTitle from "../utils/useTitle";
import FilterSection from "../components/products/FilterSection";
import SecondLayout from "../layout/SecondLayout";
import ProductsGrid from "../components/products/ProductsGrid";

const Products = () => {
  useTitle("Products - village Markt");

  return (
    <SecondLayout>
      <FilterSection />
      <ProductsGrid />
    </SecondLayout>
  );
};

export default Products;
