import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "../../../components/Form/Form";
import "./Login.css";
import { SIGN_IN_USER } from "../../../redux/auth/actions";

const Register = () => {
  const [registerUserDetails, setRegisterUserDetails] = useState({
    username: "",
    password: ""
  });
  const dispatch = useDispatch();

  const loginUser = (userDetails) => {
    dispatch({ type: SIGN_IN_USER, payload: userDetails });
  };

  const loggedInUserDetails = useSelector((state) => state.auth);
 
  const registerProps = {
    userDetails: registerUserDetails,
    setUserDetails: setRegisterUserDetails,
    loginUser,
    loggedInUserDetails,
    };
  return (
    <div>
      <Form {...registerProps} />
    </div>
  );
};

export default Register;
