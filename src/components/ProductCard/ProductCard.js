import React, { useState } from "react";
import "./ProductCard.css";
import { Snackbar } from "@mui/material";

const ProductCard = ({ productDetails, addItemToCart, getSingleProductList }) => {

  const [isOpen, setIsOpen] = useState(false);

   const goToCartPage = (e) => {
    e.stopPropagation();
    setIsOpen(true);
    addItemToCart();
  };

  return (
    <>
        <div
          key={productDetails?.id}
          data-cy="single-product-card"
          className="card-shadow cursor-pointer"
          onClick={() => getSingleProductList(productDetails.id)}
        >
          <div className="img-placeholder skeleton-grey">
            <img
              src={productDetails?.images[0]}
              className="width-100 height-100"
              alt=""
            />
          </div>
          <div className="text-align-left margin-sm padding-small" >
            <p>{productDetails?.category}</p>
            <h5 data-cy="product-title">{productDetails?.title}</h5>
            <p>{productDetails.rating}</p>
            <p>
              ${productDetails?.price} <span>({productDetails?.discount}% OFF)</span>
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
      <Snackbar
       data-cy="snackbar"
        open={isOpen}
        autoHideDuration={500}
        onClose={() => setIsOpen(false)}
        message="product has been added to the cart successfully"
      />
  </>
  );
};

export default ProductCard;
