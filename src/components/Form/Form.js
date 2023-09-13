import React, { useEffect } from "react";

const Form = (props) => {
  const updateFormField = (e) => {
    props.setUserDetails({
      ...props.userDetails,
      [e.target.name]: e.target.value
    });
  };
 return (
    <>
      <div className="d-flex justify-content-ctr align-items-ctr flex-direction-column vertically-center ">
        <p className="font-family-abril">Logo</p>
        <form>
          <div className="margin-vertical">
            <div>Email</div>
            <input
              type="text"
              value={props.userDetails.email}
              onChange={(e) => updateFormField(e)}
              name="email"
            />
          </div>
          <div className="margin-vertical">
            <div>UserName</div>
            <input
              type="text"
              value={props.userDetails.userName}
              onChange={(e) => updateFormField(e)}
              name="userName"
            />
          </div>
          <div className="margin-vertical">
            <div>Password</div>
            <div>
              <input
                type="text"
                value={props.userDetails.password}
                onChange={(e) => updateFormField(e)}
                name="password"
              />
            </div>
          </div>
          <button>Register</button>
        </form>
      </div>
    </>
  );
};

export default Form;
