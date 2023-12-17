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
  const [filtered, setFiltered] = useState([]);
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

  const sortArray = (type) => {
    if (
      type === types.alphabetically ||
      type === types.featured ||
      type === types.bestSelling
    ) {
      fetchProducts();
      commerceProducts.sort((a, b) => a.name.localeCompare(b.name));
      setFiltered(commerceProducts);
    } else if (type === types.reverseAphabetically) {
      fetchProducts();
      commerceProducts.sort((a, b) => a.name.localeCompare(b.name)).reverse();
      setFiltered(commerceProducts);
    } else if (type === types.price) {
      fetchProducts();
      commerceProducts.sort((a, b) => b.price.raw - a.price.raw);
      setFiltered(commerceProducts);
    } else if (type === types.reversePrice) {
      fetchProducts();
      commerceProducts.sort((a, b) => b.price.raw - a.price.raw).reverse();
      setFiltered(commerceProducts);
    } else if (type === types.date) {
      fetchProducts();
      commerceProducts.sort((a, b) => b.created - a.created);
      setFiltered(commerceProducts);
    } else if (type === types.reverseDate) {
      fetchProducts();
      commerceProducts.sort((a, b) => b.created - a.created).reverse();
      setFiltered(commerceProducts);
    }

    // console.log(filtered[0].created);
  };

  useEffect(() => {
    fetchProducts();
    sortArray("alphabetically");
  }, [loading]);
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
