
import React,{ useState} from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PersonOutline } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

import { useNavigate } from "react-router";

import "./Navbar.css";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { isLoggedIn, handleLogout,searchResults,username } = props;
  const [searchValue,setSearchValue] = useState("")

  /**
   * @function
   * if user searched product returns empty field, search results function will not be executed
   * search results will be executed ,only if it passes above check
   */

 const submitSearchResult = () =>{
  if  ( searchValue === "") return 
  searchResults(searchValue)
 }

  return (
    <div className="display-flex justify-content-space-between padding-2rem">
      <div className="font-family-abril font-size-2rem">Logo</div>
      <div className="display-flex align-items-center">
        <input type="text" data-cy="search-input-box" onChange={(e)=>setSearchValue(e.target.value)} value={searchValue}/>
        <button className="primary-bg-light-grey font-weight-bold outline-0 border-0 padding-point-3rem" data-cy="search-button" onClick={submitSearchResult}>
          <SearchIcon />
        </button>
      </div>
      <div className="display-flex column-gap-point-6rem align-items-center cursor-pointer">
        <ShoppingCartIcon onClick={() => navigate("/cart")} data-cy="shopping-cart" />
        <div>
          {isLoggedIn? (
            <div className="display-flex column-gap-point-6rem align-items-center">
              <div data-cy="username">{username}</div>
              <button
                className="primary-bg-light-grey font-weight-bold outline-0 border-0  padding-point-4rem  display-flex column-gap-point-6rem align-items-center"
                data-cy="logout-button"
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
