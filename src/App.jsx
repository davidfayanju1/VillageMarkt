import { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { collections, home, products } from "./utils/routes";
import Products from "./pages/Products";
import Collections from "./pages/Collections";

export const router = createBrowserRouter([
  {
    path: home,
    element: <Home />,
  },
  {
    path: products,
    element: <Products />,
  },
  {
    path: collections,
    element: <Collections />,
  },
]);
