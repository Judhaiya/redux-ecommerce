import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_CART_ITEMS } from "../../redux/cart/actions";
import { useNavigate } from "react-router";
import "./Cart.css";
import { successSnackbar,openSnackbar } from "../../redux/snackbar/snackbarSlice";

const Cart = () => {
  const cartItemsList = useSelector((state) => state?.cart.cartItems);
  const loggedInUserData = useSelector((state) => state.auth.userDetails.data);
  const isLoading = useSelector((state) => state.loading.isCartLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: GET_CART_ITEMS, payload: loggedInUserData.token });
  }, []);


  const checkoutCart = () => {
    dispatch(openSnackbar(true))
    dispatch(successSnackbar("cart has been checkedout successfully"))
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
                <th className="padding-medium">Item</th>
                <th className="padding-medium">Price</th>
                <th className="padding-medium">Quantity</th>
                <th className="padding-medium">Total</th>
              </tr>
              {cartItemsList?.products?.map((product) => (
                <tr key={product?.id}>
                  <td className="padding-medium display-flex align-items-center column-gap-sm">
                    <div className="width-100px height-50px default-bg-grey"></div>
                    <div className="font-size-14px">
                      <p>{product?.title}</p>
                    </div>
                  </td>
                  <td>{product?.price}</td>
                  <td>
                    <div className="display-flex align-items-center column-gap-sm">
                      <button className="fw-bold outline-0 border-0 ">+</button>
                      <p>{product?.quantity}</p>
                      <button className="fw-bold outline-0 border-0 ">-</button>
                    </div>
                  </td>
                  <td>{product?.total}</td>
                </tr>
              ))}
              <tr>
                <td className="border-0"></td>
                <td colSpan="2" className="padding-medium">
                  Total:
                </td>
                <td>{cartItemsList?.total}</td>
              </tr>

              <tr>
                <td className="border-0"></td>
                <td colSpan="2" className="padding-medium">
                  Discounted Total
                </td>
                <td> {cartItemsList.discountedTotal}</td>
              </tr>
              <tr>
                <td className="border-0"></td>
                <td colSpan="2" className="text-align-center padding-medium">
                  {" "}
                  <button
                    className="cta-bg fw-bold outline-0 border-0 padding-small box-shadow-grey transform-center-25px"
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
