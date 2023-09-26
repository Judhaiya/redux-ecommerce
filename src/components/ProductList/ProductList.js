import React from "react";
import "./ProductList.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { GET_SINGLE_PRODUCT } from "../../redux/products/actions";

const ProductList = ({ productsList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token =  useSelector((state) => state?.auth?.userDetails?.data?.token);

  const getSingleProductList = (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT, payload: { id,token } });
    navigate(`/singleProduct/${id}`)
  };
  const goToCartPage = (e)=>{
  e.stopPropagation()
  navigate("/cart")
  }

  return (
    <div className="product-list-container">
      {productsList?.products?.map((product) => (
        <div
          key={product?.id}
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
          <div className="text-align-left margin-sm padding-small">
            <p>{product?.category}</p>
            <h5>{product?.title}</h5>
            <p>{product.rating}</p>
            <p>
              ${product?.price} <span>({product?.discount}% OFF)</span>
            </p>
            <button
              className="margin-vertical cta-bg fw-bold outline-0 border-0 padding-small box-shadow-grey"
              onClick={goToCartPage}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
