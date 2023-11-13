import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import Herosection from "../components/home/Herosection";
import Navbar from "../components/Navbar";
import TextArea from "../components/home/TextArea";
import Carousel from "../components/home/Carousel";
import Slider from "../components/home/Slider";
import Categories from "../components/home/Categories";
import Bundles from "../components/home/Bundles";
import Fresh from "../components/home/Fresh";
import Video from "../components/home/Video";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import Shop from "../components/home/Shop";
import useTitle from "../utils/useTitle";

const Home = () => {
  useTitle(
    "Village Markt | Fresh Farm Foods Delivered Straight To Your Doorstep"
  );

  return (
    <MainLayout>
      <Herosection />
      <TextArea />
      <Carousel />
      <Slider />
      <Categories />
      <Bundles />
      <Fresh />
      <Video />
      <Process />
      <Testimonials />
      <Shop />
    </MainLayout>
  );
};

export default Home;
