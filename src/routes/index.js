import React from "react";
import { Routes, Route } from "react-router";

import Login from "../screens/Auth/Login/Login";
import Home from "../screens/Home/Home";

import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route />
    </Routes>
  );
};

export default AppRoutes;
