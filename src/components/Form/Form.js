import React, { useState } from "react";
import { Snackbar } from "@mui/material";

const Form = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: ""
  });

  const updateFormField = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    props.onSaveLoginDetails(userDetails, setUserDetails, setIsOpen)

  };
  return (
    <>
      <div className="d-flex justify-content-ctr align-items-ctr flex-direction-column vertically-center ">
        <p className="font-family-abril">Logo</p>
        <form>
          <div className="margin-vertical">
            <div>UserName</div>
            <input
              type="text"
              value={userDetails.username}
              onChange={(e) => updateFormField(e)}
              name="username"
            />
          </div>
          <div className="margin-vertical">
            <div>Password</div>
            <div>
              <input
                type="text"
                value={userDetails.password}
                onChange={(e) => updateFormField(e)}
                name="password"
              />
            </div>
          </div>
          <button onClick={handleSubmission}>Login</button>
        </form>
      </div>
      <Snackbar
        open={isOpen}
        autoHideDuration={2000}
        onClose={() => setIsOpen(false)}
        message={props?.loggedInUserDetails?.error?.msg}
      />
    </>
  );
};

export default Form;
