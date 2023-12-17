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

  const [filtered, setFiltered] = useState([]);
  // sort
  const sortArray = (type) => {
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

    // const sortProperty = types[type];

    if (commerceProducts.length > 0) {
      if (type === types.alphabetically) {
        commerceProducts.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      }
    }
    setFiltered(commerceProducts);
    console.log(filtered);
  };

  useEffect(() => {
    fetchProducts();
  }, [loading]);

  useEffect(() => {
    sortArray("alphabetically");
  }, [commerceProducts]);

  return (
    <SecondLayout>
      <FilterSection
        commerceProducts={commerceProducts}
        sortArray={sortArray}
      />
      <ProductsGrid commerceProducts={commerceProducts} filtered={filtered} />
    </SecondLayout>
  );
};

export default Products;
