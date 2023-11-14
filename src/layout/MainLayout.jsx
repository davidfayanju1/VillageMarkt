import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <TopNav />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
