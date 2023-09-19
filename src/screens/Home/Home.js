import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
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
      <div className="d-flex justify-content-ctr">Home</div>
      <Footer />
    </div>
  );
};

export default Home;
