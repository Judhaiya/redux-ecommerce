import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { logoutUser } from "../../redux/auth/authSlice";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Home = () => {
  const loggedInUserData = useSelector((state) => state.auth.userDetails.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div>
      <Navbar userDetails={loggedInUserData} handleLogout={handleLogout} />
      <div>Home</div>
    </div>
  );
};

export default Home;
