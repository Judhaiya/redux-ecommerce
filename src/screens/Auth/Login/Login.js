import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "../../../components/Form/Form";
import "./Login.css";
import { SIGN_IN_USER } from "../../../redux/auth/actions";
import {
  errorSnackbar,
  openSnackbar,
} from "../../../redux/snackbar/snackbarSlice";

import { useNavigate } from "react-router";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userdata = useSelector((state) => state.auth);
  const isLoading = useSelector((state) => state?.loading?.isAuthLoading);
  const isOpen = useSelector((state) => state.snackbar.isSnackbarOpen);
  const errorMsg = useSelector((state) => state.snackbar.error.snackbarMsg);

  /**
   * @function
   * dispatch function for opening snackbar
   * to open snackbar for showing error or success message
   */
  const snackbarOpen = () => {
    dispatch(openSnackbar());
  };

  /**
   * @function
   * @param {string} payload, error message to show when validation fails
   * this happens while we have to update error snackbar state for showing validation
   * error snackbar
   */

  const showValidationError = (payload) => {
    dispatch(errorSnackbar(payload));
  };

  useEffect(() => {
    if (userdata?.userDetails?.data?.token) {
      setUserDetails({ username: "", password: "" });
      navigate("/home");
    }
  }, [userdata]);

  /**
   * @function
   * calls dispatch function for the type SIGN_IN_USER and signed in userdetails for the same
   */
  const onSaveLoginDetails = async () => {
    dispatch({ type: SIGN_IN_USER, payload: userDetails });
  };

  const registerProps = {
    onSaveLoginDetails,
    isOpen,
    snackbarOpen,
    showValidationError,
    errorMsg,
    userDetails,
    setUserDetails,
    isLoading
  };

  return (
    <div>
      <Form {...registerProps} />
    </div>
  );
};

export default Register;
