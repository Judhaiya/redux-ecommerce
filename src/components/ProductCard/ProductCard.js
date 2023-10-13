import React from "react";
import "./ProductCard.css";

const ProductCard = ({ productDetails, addItemToCart, getSingleProductList,snackbarOpen }) => {


   const addToCart = (e) => {
    e.stopPropagation();
     snackbarOpen()
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
              onClick={addToCart}
              data-cy="cart-button"
            >
              ADD TO CART
            </button>
          </div>
        </div>
     
  </>
  );
};

export default ProductCard;
