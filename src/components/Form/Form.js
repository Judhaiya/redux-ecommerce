import React from "react";

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
      props.snackbarOpen();
      props.showValidationError("Username or password cannot be empty");
      return;
    }
    props.onSaveLoginDetails();
  };

return (
    <>
      <div className="display-flex justify-content-center align-items-center flex-direction-column translate-y-50percent">
        <p className="font-family-abril font-size-2rem">Logo</p>
        <form onSubmit={handleSubmission} onChange={(e) => updateFormField(e)}>
          <div className="margin-vertical-2rem">
            <div>UserName</div>
            <input
              className="input-border"
              data-cy="username-input"
              type="text"
              defaultValue={props.userDetails.username}
              name="username"
            />
          </div>
          <div className="margin-vertical-2rem">
            <div>Password</div>
            <div>
              <input
                className="input-border"
                data-cy="password-input"
                type="text"
                defaultValue={props?.userDetails?.password}
                name="password"
              />
            </div>
          </div>
          <div className="display-flex justify-content-center">
            <button
             data-cy="btn-submit"
             type="submit"
              className="primary-bg-light-grey font-weight-bold outline-0 border-0 padding-point4rem-point9rem"
            >
             {props.isLoading ? "loading ....." : "Login"}
            </button>
          </div>
        </form>
      </div>
     </>
  );
};

export default Form;
