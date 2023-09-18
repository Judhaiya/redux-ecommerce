import React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = (props) => {
  const { userDetails, handleLogout } = props
  return (
    <div className="d-flex justify-content-space-btw padding-2rem">
      <div className="font-family-abril">Logo</div>
      <div>
        <input type="text" />
        <button>search</button>
      </div>
      <div className="d-flex column-gap-sm align-items-ctr">
        <ShoppingCartIcon />
        <div>
          {userDetails?.token ? (
            <div className="d-flex column-gap-sm align-items-ctr">
              <div>{userDetails.username}</div>
              <button onClick={() => handleLogout()}>Logout</button>
            </div>

          ) : (
            <button>Login/Signup</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
