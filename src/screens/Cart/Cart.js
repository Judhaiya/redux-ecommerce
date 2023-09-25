import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_ALL_PRODUCTS } from "../../redux/products/actions";

import "./Cart.css";

const Cart = () => {
  const productsList = useSelector((state) => state.products.productsList);
  const loggedInUserData = useSelector((state) => state.auth.userDetails.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ALL_PRODUCTS, payload: loggedInUserData.token });
  }, []);

  return (
    <div
      className="display-flex justify-content-center align-items-center"
      style={{ flexDirection: "column" }}
    >
      <table>
        <tbody>
          <tr>
            <th className="padding-medium">Item</th>
            <th className="padding-medium">Price</th>
            <th className="padding-medium">Quantity</th>
            <th className="padding-medium">Total</th>
          </tr>
          {productsList?.products?.map((product) => (
            <tr key={product?.id}>
              <td className="padding-medium display-flex align-items-center column-gap-sm">
                <div className="width-100px height-50px">
                  <img
                    src={product?.thumbnail}
                    className="width-100 height-100"
                    alt=""
                  />
                </div>
                <div className="font-size-14px">
                  <p>{product?.title}</p>
                  <p className="font-size-12px">{product?.category}</p>
                  <p className="fw-bold">{product?.rating}</p>
                </div>
              </td>
              <td>{product?.price}</td>
              <td>
                <div className="display-flex align-items-center column-gap-sm">
                  <button className="fw-bold outline-0 border-0 ">+</button>
                  <p>2</p>
                  <button className="fw-bold outline-0 border-0 ">-</button>
                </div>
              </td>
              <td>$566</td>
            </tr>
          ))}
          <tr>
            <td className="border-0"></td>
            <td colspan="2" className="padding-medium">
              SubTotal:
            </td>
            <td>$1234</td>
          </tr>
          <tr>
            <td className="border-0"></td>
            <td colspan="2" className="padding-medium">
              Sales Tax
            </td>
            <td>$1234</td>
          </tr>
          <tr>
            <td className="border-0"></td> 
            <td colspan="2" className="padding-medium">
              Grand Total
            </td>
            <td>$1234</td>
          </tr>
          <tr>
          <td className="border-0"></td>
           <td colspan="2" className="text-align-center padding-medium"> <button className="cta-bg fw-bold outline-0 border-0 padding-small box-shadow-grey transform-center-25px">PROCEED TO CHECKOUT</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
