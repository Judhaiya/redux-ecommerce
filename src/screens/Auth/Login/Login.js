import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "../../../components/Form/Form";
import "./Login.css";
import { SIGN_IN_USER } from "../../../redux/auth/actions";

import { useNavigate } from "react-router";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const loggedInUserDetails = useSelector((state) => state.auth);

  const onSaveLoginDetails = async (userDetails, setUserDetails, setIsOpen) => {

    dispatch({ type: SIGN_IN_USER, payload: { userDetails } });

    if (!loggedInUserDetails.userDetails.data) {
      console.log("a");
      setIsOpen(true);
      return;
    }
    console.log("b");
    setUserDetails({})
    navigate("/home");
  };

  const registerProps = {
    onSaveLoginDetails,
    loggedInUserDetails
  };

  return (
    <div>
      <Form {...registerProps} />
    </div>
  );
};

export default Register;
