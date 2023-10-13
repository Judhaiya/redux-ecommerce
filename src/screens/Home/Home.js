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

  const getSingleProductList = (id) => {
    navigate(`/singleProduct/${id}`);
  };

  const snackbarOpen = ()=>{
   dispatch(openSnackbar(true))
  }

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
      <div className="skeleton-grey width-100 hght-500px display-flex align-items-center justify-content-center">
        <h4 className="hero-txt-sideline text-center "> GET 30% OFF </h4>
      </div>
      <div className="product-list-container">
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
