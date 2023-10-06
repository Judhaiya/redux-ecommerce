import React, { useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductList from "../../components/ProductList/ProductList";
import { logoutUser } from "../../redux/auth/authSlice";
import { GET_ALL_PRODUCTS } from "../../redux/products/actions";
import { ADD_TO_CART } from "../../redux/cart/actions";
import { SEARCH_PRODUCT } from "../../redux/search/searchActions";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import "./Home.css";

const Home = () => {
  const loggedInUserData = useSelector((state) => state.auth.userDetails.data);
  const productsList = useSelector((state) => state.products.productsList);

 useEffect(()=>{
   console.log(productsList,"product list")
 },[productsList])

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  useEffect(() => {
    dispatch({ type: GET_ALL_PRODUCTS, payload: loggedInUserData.token });
  }, []);

  const addItemToCart = () => {
    const payload = {
      token: loggedInUserData.token,
      cartItem: {
        userId: 1,
        products: [
          {
            id: 1,
            quantity: 1
          },
          {
            id: 50,
            quantity: 2
          }
        ]
      }
    };
    dispatch({ type: ADD_TO_CART, payload });
  };

  const searchResults = (searchValue) =>{
    const payload ={
      token:loggedInUserData.token,
      query:searchValue
    }
   dispatch({type:SEARCH_PRODUCT,payload})
  }
  
  return (
    <div>
      <Navbar userDetails={loggedInUserData} handleLogout={handleLogout} searchResults={searchResults}/>
      {/* Banner  */}
      <div className="skeleton-grey width-100 hght-500px display-flex align-items-center justify-content-center">
        <h4 className="hero-txt-sideline text-center "> GET 30% OFF </h4>
      </div>
      <div className="">
        <ProductList
          productsList={productsList}
          addItemToCart={addItemToCart}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
