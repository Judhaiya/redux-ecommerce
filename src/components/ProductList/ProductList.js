import React from "react";
import "./ProductList.css";

const ProductList = ({ sampleProducts,ProductsList }) => {

  return (
    
    <div className="product-list-container">
      {sampleProducts.map((product) => (
        <div key={product.id} className="card-shadow ">
            <div className="img-placeholder skeleton-grey"></div>
            <div className="text-align-left margin-sm padding-small">
                <p>{product?.category}</p>
                <h5>{product?.title}</h5>
                <p>{product.rating}</p>
                <p>${product?.price} <span>({product?.discount}% OFF)</span></p>
            </div>
        </div>
      ))}
    </div>
 
  );
};

export default ProductList;
