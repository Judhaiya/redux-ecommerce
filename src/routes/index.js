import React from "react";
import { Routes, Route } from "react-router";

import PrivateRoute from "./PrivateRoute";

import Login from "../screens/Auth/Login/Login";
import Home from "../screens/Home/Home";
import Cart from "../screens/Cart/Cart";
import ProductDescription from "../screens/ProductDescription/ProductDescription";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
      <Route path="/singleProduct" element={<PrivateRoute><ProductDescription/></PrivateRoute>} />
      <Route />
    </Routes>
  );
};

export default AppRoutes;
