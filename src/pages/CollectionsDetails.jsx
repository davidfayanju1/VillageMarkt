import React, { useEffect, useState } from "react";
import SecondLayout from "../layout/SecondLayout";
import { NavLink, useParams } from "react-router-dom";
import { ArrowRight } from "../assets/svgs/svg-icons";
import useTitle from "../utils/useTitle";
import CollectionsFilter from "../components/collections/CollectionsFilter";
import CollectionsGrid from "../components/collections/CollectionsGrid";
import { commerce } from "../lib/commerce";

const CollectionsDetails = () => {
  const { id } = useParams();

  useTitle(`${id} - Village Markt`);

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

  useEffect(() => {
    fetchProducts();
  }, [loading]);

  return (
    <SecondLayout>
      <div className="page_container min-h-screen bg-primary">
        <CollectionsFilter id={id} />
        <CollectionsGrid
          commerceProducts={commerceProducts}
          id={id}
          loading={loading}
        />
      </div>
    </SecondLayout>
  );
};

export default CollectionsDetails;
