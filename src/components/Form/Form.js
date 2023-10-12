import React from "react";
import { Snackbar } from "@mui/material";

const Form = (props) => {
  const updateFormField = (e) => {
    props.setUserDetails({
      ...props.userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    const { username, password } = props.userDetails;
    if (username === "" || password === "") {
      props.setIsOpen(true);
      props.setErrorMsg("Username or password cannot be empty");
      return;
    }
    props.onSaveLoginDetails();
  };
  return (
    <>
      <div className="display-flex justify-content-center align-items-center flex-direction-column vertically-center ">
        <p className="font-family-abril logo-size">Logo</p>
        <form onSubmit={handleSubmission} onChange={(e) => updateFormField(e)}>
          <div className="margin-vertical">
            <div>UserName</div>
            <input
              className="input-border"
              data-cy="username-input"
              type="text"
              value={props.userDetails.username}
              name="username"
            />
          </div>
          <div className="margin-vertical">
            <div>Password</div>
            <div>
              <input
                className="input-border"
                data-cy="password-input"
                type="text"
                value={props?.userDetails?.password}
                name="password"
              />
            </div>
          </div>
          <div className="display-flex justify-content-center">
            <button
             data-cy="btn-submit"
             type="submit"
              className="cta-bg fw-bold outline-0 border-0 login-btn-padding"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <Snackbar
        open={props.isOpen}
        autoHideDuration={2000}
        onClose={() => props.setIsOpen(false)}
        message={props.errorMsg}
      />
    </>
  );
};

export default Form;
