import React, { useState } from "react";
import "./ProductList.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { GET_SINGLE_PRODUCT } from "../../redux/products/actions";
import { Snackbar } from "@mui/material";

const ProductList = ({ productsList, addItemToCart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const token = useSelector((state) => state?.auth?.userDetails?.data?.token);

  const getSingleProductList = (id) => {
    navigate(`/singleProduct/${id}`);
  };
  const goToCartPage = (e) => {
    e.stopPropagation();
    setIsOpen(true);
    addItemToCart();
  };

  return (
    <div className="product-list-container">
      {productsList?.products?.map((product) => (
        <div
          key={product?.id}
          data-cy="single-product-card"
          className="card-shadow cursor-pointer"
          onClick={() => getSingleProductList(product.id)}
        >
          <div className="img-placeholder skeleton-grey">
            <img
              src={product?.images[0]}
              className="width-100 height-100"
              alt=""
            />
          </div>
          <div className="text-align-left margin-sm padding-small" >
            <p>{product?.category}</p>
            <h5 data-cy="product-title">{product?.title}</h5>
            <p>{product.rating}</p>
            <p>
              ${product?.price} <span>({product?.discount}% OFF)</span>
            </p>
            <button
              className="margin-vertical cta-bg fw-bold outline-0 border-0 padding-small box-shadow-grey"
              onClick={goToCartPage}
              data-cy="cart-button"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
      <Snackbar
       data-cy="snackbar"
        open={isOpen}
        autoHideDuration={500}
        onClose={() => setIsOpen(false)}
        message="product has been added to the cart successfully"
      />
    </div>
  );
};

export default ProductList;
