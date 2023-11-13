import { useState } from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { home, products } from "./utils/routes";
import Products from "./pages/Products";

export const router = createBrowserRouter([
  {
    path: home,
    element: <Home />,
  },
  {
    path: products,
    element: <Products />,
  },
]);
