import React from "react";
import { Routes, Route } from "react-router";
import Login from "../screens/Auth/Login/Login";
import Home from "../screens/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route />
    </Routes>
  );
};

export default AppRoutes;
