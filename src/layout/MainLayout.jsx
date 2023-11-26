import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import { useLocation } from "react-router-dom";
import Search from "../components/SearchModal";
import CartPage from "../components/CartPage";

const MainLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <CartPage />
      <Search />
      <Sidebar />
      <TopNav />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
