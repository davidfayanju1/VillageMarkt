import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
