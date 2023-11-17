import React from "react";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import SecondNav from "../components/SecondNav";

const SecondLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <TopNav />
      <SecondNav />
      {children}
      <Footer />
    </>
  );
};

export default SecondLayout;
