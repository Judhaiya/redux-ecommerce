import React from "react";
import { Routes, Route } from "react-router";

import Home from "./screens/Home/Home";
import Login from "./screens/Auth/Login/Login";
import Cart from "./screens/Cart/Cart";
import { useSelector} from "react-redux";
import ProductDescription from "./screens/ProductDescription/ProductDescription";
import ErrorBoundary from "./utilities/ErrorBoundary";
import { Navigate } from "react-router";



const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state?.auth?.userDetails?.data?.token);
  return isAuth ? children : <Navigate to="/" />;
};

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
      <Route path="/singleProduct/:id" element={<PrivateRoute><ProductDescription/></PrivateRoute>} />
      <Route />
    </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
