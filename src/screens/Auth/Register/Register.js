import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "../../../components/Form/Form";
import "../Register/Register.css";
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

  const registerProps = {
    userDetails: registerUserDetails,
    setUserDetails: setRegisterUserDetails,
    loginUser
  };
  const userDetails = useSelector((state) => state.registerUserDetails);
 
  return (
    <div>
      <Form {...registerProps} />
    </div>
  );
};

export default Register;
