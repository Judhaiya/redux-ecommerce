import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "../../../components/Form/Form";
import "./Login.css";
import { SIGN_IN_USER } from "../../../redux/auth/actions";
import {
  errorSnackbar,
  openSnackbar,
  closeSnackbar
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

  const snackbarOpen = () => {
    dispatch(openSnackbar());
  };
  const snackbarClose = () => {
    dispatch(closeSnackbar());
  };
  const showValidationError = (payload) => {
    dispatch(errorSnackbar(payload));
  };

  useEffect(() => {
   if (userdata?.userDetails?.data?.token) {
      setUserDetails({ username: "", password: "" });
      navigate("/home");
      }
 
  }, [userdata]);

  const onSaveLoginDetails = async () => {
    dispatch({ type: SIGN_IN_USER, payload: userDetails });
  };

  const registerProps = {
    onSaveLoginDetails,
    isOpen,
    snackbarOpen,
    snackbarClose,
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
