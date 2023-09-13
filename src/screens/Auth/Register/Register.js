import React, { useState, useEffect } from "react";
import Form from "../../../components/Form/Form";
import "../Register/Register.css";

const Register = () => {
  const [registerUserDetails, setRegisterUserDetails] = useState({
    email: "",
    userName: "",
    password: ""
  });
  const registerProps = {
    userDetails: registerUserDetails,
    setUserDetails: setRegisterUserDetails
  };
  useEffect(() => {

    fetch("https://dummyjson.com/auth/products", {
      method: "GET" /* or POST/PUT/PATCH/DELETE */,
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTY5NDU5ODQ3OSwiZXhwIjoxNjk0NjAyMDc5fQ.uCeckV1BlFaig6yx9jQePwbVqAkUxcerSIUtoPi7io8",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then(data=>console.log(data));
  }, []);
  return (
    <div>
      <Form {...registerProps} />
    </div>
  );
};

export default Register;
