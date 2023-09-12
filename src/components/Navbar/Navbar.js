import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import React, { useEffect } from "react";
const Navbar = (props) => {
  useEffect(() => {
    //  fetch("/api/authors", {
    //     method:"post",
    //     headers: {
    //     "Content-Type": "application/json"
    //     },
    //     body:{
    //          }
    //  }).then(res=>res)   
    //  .then(data=>console.log(data.json()))
    (async () => {
      const response = await fetch("/movies", {
        method: "post",
        body: { id: 1, name: "Inception", year: 2010 }
      });
      
      console.log("response", response);
    })();
  
  }, []);

  return (
    <div className="d-flex justify-content-space-btw padding-2rem">
      <div className="font-family-abril">Logo</div>
      <div>
        <input type="text" />
        <button>search</button>
      </div>
      <div className="d-flex column-gap-sm">
        <ShoppingCartIcon />
        <div>
          {props.isLoggedIn ? (
            <AccountCircleIcon />
          ) : (
            <button>Login/Signup</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
