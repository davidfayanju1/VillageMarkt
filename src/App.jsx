import { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import {
  cart,
  collections,
  details,
  home,
  login,
  products,
  collectionDetails,
} from "./utils/routes";
import Products from "./pages/Products";
import Collections from "./pages/Collections";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import CollectionsDetails from "./pages/CollectionsDetails";

export const router = createBrowserRouter([
  {
    path: home,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: products,
    element: <Products />,
  },
  {
    path: collections,
    element: <Collections />,
  },
  {
    path: cart,
    element: <Cart />,
  },
  {
    path: login,
    element: <Login />,
  },
  {
    path: details,
    element: <ProductDetails />,
  },
  {
    path: collectionDetails,
    element: <CollectionsDetails />,
  },
]);
