import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_SINGLE_PRODUCT } from "../../redux/products/actions";
import { useParams } from "react-router";

const ProductDescription = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = useSelector((state) => state.auth.userDetails.data.token);

  useEffect(() => {
    dispatch({ type: GET_SINGLE_PRODUCT, payload: { id, token } });
  }, []);
   
  const productDetails = useSelector(
    (state) => state.products.singleProductList
  );

  return (
    <div>
      {/* <p>{productDetails?.title}</p> */}
      {Object.keys(productDetails).length > 0 &&
      <div className="display-flex justify-content-center align-items-center column-gap-3rem transform-y-50px">
        <div>
          <img src={productDetails?.thumbnail} alt={productDetails?.title} />
        </div>
        <div className="display-flex flex-direction-column row-gap-sm">
          <h3>{productDetails?.title}</h3>
          <div className="font-family-abril">{productDetails?.brand}</div>
          <div className="text-transform-capitalize font-size-12px">{productDetails?.category}</div>
          <div className="font-size-14px">{productDetails?.description}</div>
          <div className="font-size-14px">rating: {productDetails?.rating}</div>
          <div><button className="fw-bold font-size-14px cta-bg fw-bold outline-0 border-0 padding-small box-shadow-grey">ADD TO CART</button></div>
        </div>
      </div>
}
    </div>
  );
};

export default ProductDescription;
