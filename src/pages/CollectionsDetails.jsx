import React from "react";
import SecondLayout from "../layout/SecondLayout";
import { NavLink, useParams } from "react-router-dom";
import { ArrowRight } from "../assets/svgs/svg-icons";
import useTitle from "../utils/useTitle";
import CollectionsFilter from "../components/collections/CollectionsFilter";
import CollectionsGrid from "../components/collections/CollectionsGrid";

const CollectionsDetails = () => {
  const { id } = useParams();

  useTitle(`${id} - Village Markt`);

  return (
    <SecondLayout>
      <div className="page_container min-h-screen bg-primary">
        <CollectionsFilter id={id} />
        <CollectionsGrid />
      </div>
    </SecondLayout>
  );
};

export default CollectionsDetails;
