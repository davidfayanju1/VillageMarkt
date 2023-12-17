import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import useTitle from "../utils/useTitle";
import FilterSection from "../components/products/FilterSection";
import SecondLayout from "../layout/SecondLayout";
import ProductsGrid from "../components/products/ProductsGrid";
import { commerce } from "../lib/commerce";

const Products = () => {
  useTitle("Products - village Markt");
  // asynchronous
  const [loading, setLoading] = useState(true);
  const [commerceProducts, setcommerceProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setLoading(false);
      setcommerceProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  // sort
  const [filtered, setFiltered] = useState([]);
  const types = {
    alphabetically: "alphabetically",
    reverseAphabetically: "reverse alphabetically",
    featured: "featured",
    bestSelling: "best selling",
    price: "price",
    reversePrice: "reverse price",
    date: "date",
    reverseDate: "reverse date",
  };

  useEffect(() => {
    fetchProducts();
  }, [loading]);

  const sortArray = (type) => {
    if (commerceProducts.length > 0) {
      if (type === types.alphabetically) {
        commerceProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (type === types.reverseAphabetically) {
        commerceProducts.sort((a, b) => a.name.localeCompare(b.name)).reverse();
      }
    }
    setFiltered(commerceProducts);
  };
  useEffect(() => {
    sortArray("alphabetically");
  }, [commerceProducts]);

  // useEffect(() => {}, [filtered]);

  return (
    <SecondLayout>
      <FilterSection
        commerceProducts={commerceProducts}
        sortArray={sortArray}
      />
      <ProductsGrid filtered={filtered} commerceProducts={commerceProducts} />
    </SecondLayout>
  );
};

export default Products;
