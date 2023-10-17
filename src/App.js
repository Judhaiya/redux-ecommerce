import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import { Snackbar } from "@mui/material";

import Home from "./screens/Home/Home";
import Login from "./screens/Auth/Login/Login";
import Cart from "./screens/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { closeSnackbar } from "./redux/snackbar/snackbarSlice";
import ProductDescription from "./screens/ProductDescription/ProductDescription";
import ErrorBoundary from "./utilities/ErrorBoundary";
import { Navigate } from "react-router";
import { parseJwt } from "./utilities/decodeJwt";
import { logoutUser } from "./redux/auth/authSlice";

const PrivateRoute = ({ children }) => {
  const isToken = useSelector((state) => state?.auth?.userDetails?.data?.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenInfo = isToken && parseJwt(isToken);
    if (new Date() > new Date(tokenInfo?.exp * 1000)) {
      dispatch(logoutUser());
    }
  }, []);

  return isToken ? children : <Navigate to="/" />;
};

const PublicRoute = ({ children }) => {
  const isToken = useSelector((state) => state?.auth?.userDetails?.data?.token);
  return isToken ? <Navigate to="/home" /> : children;
};

function App() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state?.snackbar?.isSnackbarOpen);
  const errorMsg = useSelector((state) => state?.snackbar?.snackbarMsg);

  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="/singleProduct/:id"
            element={
              <PrivateRoute>
                <ProductDescription />
              </PrivateRoute>
            }
          />
          <Route />
        </Routes>
        <Snackbar
          data-cy="snackbar"
          open={isOpen}
          autoHideDuration={1000}
          onClose={() => dispatch(closeSnackbar())}
          message={errorMsg}
        />
      </ErrorBoundary>
    </div>
  );
}

export default App;
