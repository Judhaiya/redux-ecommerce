import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_CART_ITEMS } from "../../redux/cart/actions";
import { useNavigate } from "react-router";
import "./Cart.css";
import {
  successSnackbar,
  openSnackbar
} from "../../redux/snackbar/snackbarSlice";

const Cart = () => {
  const cartItemsList = useSelector((state) => state?.cart);
  const loggedInUserData = useSelector((state) => state.auth.userDetails.data);
  const isLoading = useSelector((state) => state.loading.isCartLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: GET_CART_ITEMS, payload: loggedInUserData.token });
  }, []);

  /**
   * dispatch openSnackbar,successSnackbar
   * cart update success msg is updated in success snackbar and snackbar will be showed
   * after 500 milliseconds lapse of showing msg,navigate to login screen
   */
  const checkoutCart = () => {
    dispatch(successSnackbar("cart has been checkedout successfully"));
    dispatch(openSnackbar());
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <>
      {isLoading ? (
        <div className="display-flex justify-content-center align-items-center">
          Loading ....
        </div>
      ) : (
        <div
          className="display-flex justify-content-center align-items-center"
          style={{ flexDirection: "column" }}
        >
          <table>
            <tbody>
              <tr>
                <th className="padding-point-8rem">Item</th>
                <th className="padding-point-8rem">Price</th>
                <th className="padding-point-8rem">Quantity</th>
                <th className="padding-point-8rem">Total</th>
              </tr>
              {cartItemsList?.products?.map((product) => (
                <tr key={product?.id}>
                  <td className="padding-point-8rem display-flex align-items-center column-gap-point-6rem">
                    <div className="width-100px height-50px default-bg-grey"></div>
                    <div className="font-size-14px">
                      <p>{product?.title}</p>
                    </div>
                  </td>
                  <td>{product?.price}</td>
                  <td>
                    <div className="display-flex align-items-center column-gap-point-6rem">
                      <button className="font-weight-bold outline-0 border-0 ">
                        +
                      </button>
                      <p>{product?.quantity}</p>
                      <button className="font-weight-bold outline-0 border-0 ">
                        -
                      </button>
                    </div>
                  </td>
                  <td>{product?.total}</td>
                </tr>
              ))}
              <tr>
                <td className="border-0"></td>
                <td colSpan="2" className="padding-point-8rem">
                  Total:
                </td>
                <td>{cartItemsList?.total}</td>
              </tr>

              <tr>
                <td className="border-0"></td>
                <td colSpan="2" className="padding-point-8rem">
                  Discounted Total
                </td>
                <td> {cartItemsList?.discountedTotal}</td>
              </tr>
              <tr>
                <td className="border-0"></td>
                <td
                  colSpan="2"
                  className="text-align-center padding-point-8rem"
                >
                  {" "}
                  <button
                    className="primary-bg-light-grey font-weight-bold outline-0 border-0 padding-small box-shadow-grey transform-translateX-25px"
                    onClick={checkoutCart}
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Cart;
