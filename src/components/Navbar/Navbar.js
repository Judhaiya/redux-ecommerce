import React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PersonOutline } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';

import "./Navbar.css"

const Navbar = (props) => {
  const { userDetails, handleLogout } = props
  return (
    <div className="d-flex justify-content-space-btw padding-2rem">
      <div className="font-family-abril logo-size">Logo</div>
      <div className="d-flex align-items-ctr">
        <input type="text" />
        <button className="cta-bg fw-bold outline-0 border-0 search-icon-btn "><SearchIcon /></button>
      </div>
      <div className="d-flex column-gap-sm align-items-ctr">
        <ShoppingCartIcon />
        <div>
          {userDetails?.token ? (
            <div className="d-flex column-gap-sm align-items-ctr">
              <div>{userDetails.username}</div>
              <button className="cta-bg fw-bold outline-0 border-0  cta-padding-extrasmall  d-flex column-gap-sm align-items-ctr" onClick={() => handleLogout()}>
                <span><PersonOutline /></span>
                Logout
              </button>
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
