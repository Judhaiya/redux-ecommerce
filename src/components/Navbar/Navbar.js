
import React,{useState} from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PersonOutline } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

import { useNavigate } from "react-router";

import "./Navbar.css";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { userDetails, handleLogout,searchResults } = props;
  const [searchValue,setSearchValue] = useState("")

 const submitSearchResult = () =>{
  console.log("clicked")
  if  ( searchValue === "") return 
  searchResults(searchValue)
 }

  return (
    <div className="display-flex justify-content-space-btw padding-2rem">
      <div className="font-family-abril logo-size">Logo</div>
      <div className="display-flex align-items-center">
        <input type="text" onChange={(e)=>setSearchValue(e.target.value)} value={searchValue}/>
        <button className="cta-bg fw-bold outline-0 border-0 search-icon-btn " onClick={submitSearchResult}>
          <SearchIcon />
        </button>
      </div>
      <div className="display-flex column-gap-sm align-items-center">
        <ShoppingCartIcon onClick={() => navigate("/cart")} />
        <div>
          {userDetails?.token ? (
            <div className="display-flex column-gap-sm align-items-center">
              <div data-cy="username">{userDetails.username}</div>
              <button
                className="cta-bg fw-bold outline-0 border-0  cta-padding-extrasmall  display-flex column-gap-sm align-items-center"
                onClick={() => handleLogout()}
              >
                <span>
                  <PersonOutline />
                </span>
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
