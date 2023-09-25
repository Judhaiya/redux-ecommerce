import React, { useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductList from "../../components/ProductList/ProductList";
import { logoutUser } from "../../redux/auth/authSlice";
import { GET_ALL_PRODUCTS } from "../../redux/products/actions";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import "./Home.css";

const Home = () => {
  const loggedInUserData = useSelector((state) => state.auth.userDetails.data);
  const productsList = useSelector((state) => state.products.productsList)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  useEffect(() => {
    dispatch({ type: GET_ALL_PRODUCTS, payload: loggedInUserData.token })
  }, [])

  return (
    <div>
      <Navbar userDetails={loggedInUserData} handleLogout={handleLogout} />
      {/* Banner  */}
      <div className="skeleton-grey width-100 hght-500px display-flex align-items-center justify-content-center">
        <h4 className="hero-txt-sideline text-center "> GET 30% OFF </h4>
      </div>
      <div className="">
        <ProductList productsList={productsList} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
