import React, { useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import { logoutUser } from "../../redux/auth/authSlice";
import { GET_ALL_PRODUCTS } from "../../redux/products/actions";
import { ADD_TO_CART } from "../../redux/cart/actions";
import { SEARCH_PRODUCT } from "../../redux/products/actions";
import { openSnackbar } from "../../redux/snackbar/snackbarSlice";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import "./Home.css";

const Home = () => {
  const loggedInUserData = useSelector((state) => state.auth.userDetails.data);
  const productsList = useSelector((state) => state.products.productsList);
  const isLoading = useSelector((state) => state.loading.isProductsLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * @function
   * dispatch logout user to log the user out after clicking logout button
   * and navigate to login screen
   */
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  useEffect(() => {
    dispatch({ type: GET_ALL_PRODUCTS, payload: loggedInUserData.token });
  }, []);

/**
 * @function
 * calls dispatch with type "ADD_TO_CART",payload
 * payload carries info about userId,products to be added to the cart with id and their respective
 * quantity,token
 */
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

  /**
   * @function
   * @param {number} id 
   * navigate user to product description page on click of an individual product card
   */
  const getSingleProductList = (id) => {
    navigate(`/singleProduct/${id}`);
  };
  
  /**
   * @function
   * dispatch open snackbar function to show snackbar after adding product to the cart
   */
  const snackbarOpen = ()=>{
   dispatch(openSnackbar())
  }

  /**
   * @function
   * @param {string} searchValue 
   * dispatch type "SEARCH_PRODUCT" to get results of user searched products
   * payload contains user token and user searched product
   */

  const searchResults = (searchValue) => {
    const payload = {
      token: loggedInUserData.token,
      query: searchValue
    };
    dispatch({ type: SEARCH_PRODUCT, payload });
  };

  return (
    <div>
      <Navbar
        isLoggedIn={loggedInUserData.token !== null ? true:false}
        username={loggedInUserData?.username}
        handleLogout={handleLogout}
        searchResults={searchResults}
      />
      {/* Banner  */}
      <div className="background-color-d3d3d3 width-100 height-500px display-flex align-items-center justify-content-center">
        <h4 className="hero-txt-sideline text-center "> GET 30% OFF </h4>
      </div>
      <div className="display-grid grid-template-4columns grid-gap-point-8rem padding-vertical-horizontal-2rem">
        {isLoading ? (
          <div className="display-flex justify-content-center align-items-center">
            Loading ....
          </div>
        ) : (
          <>
            {productsList?.products?.map((product, i) => (
              <ProductCard
                key={i}
                addItemToCart={addItemToCart}
                productDetails={product}
                getSingleProductList={getSingleProductList}
                snackbarOpen={snackbarOpen}
              />
            ))}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
