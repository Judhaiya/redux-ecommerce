import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = (props) => {
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
