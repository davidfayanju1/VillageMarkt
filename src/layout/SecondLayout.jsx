import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import SecondNav from "../components/SecondNav";
import { useLocation } from "react-router-dom";
import FilterSide from "../components/FilterSide";
import Search from "../components/SearchModal";
import CartPage from "../components/CartPage";

const SecondLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <CartPage />
      <Search />
      <FilterSide />
      <Sidebar />
      <TopNav />
      <SecondNav />
      {children}
      <Footer />
    </>
  );
};

export default SecondLayout;
