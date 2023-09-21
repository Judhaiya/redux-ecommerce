import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "../../../components/Form/Form";
import "./Login.css";
import { SIGN_IN_USER } from "../../../redux/auth/actions";

import { useNavigate,useLocation } from "react-router";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const userdata = useSelector((state) => state.auth);


 useEffect(() => {
   if(userdata.error.msg){
    setIsOpen(true);
    setErrorMsg(userdata.error.msg);
    return;
    }
    else if (userdata?.userDetails?.data?.token) {
      setUserDetails({ username: "", password: "" });
      navigate("/home");
      return;
    }
    setIsOpen(false)
  }, [userdata]);

  useEffect(()=>{
    if (userdata?.userDetails?.data?.token && location.pathname !== "/") {
     navigate(-1)
    }
  },[userdata?.userDetails?.data?.token])

 const onSaveLoginDetails = async () => {
    dispatch({ type: SIGN_IN_USER, payload: userDetails });
     };

  const registerProps = {
    onSaveLoginDetails,
    isOpen,
    setIsOpen,
    setErrorMsg,
    errorMsg,
    userDetails,
    setUserDetails
  };

  return (
    <div>
      <Form {...registerProps} />
    </div>
  );
};

export default Register;
