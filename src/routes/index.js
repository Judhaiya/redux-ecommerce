import React from "react";
import { Routes, Route } from "react-router";
import Register from "../screens/Auth/Register/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route />
    </Routes>
  );
};

export default AppRoutes;
