import { Navigate } from 'react-router'

import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const isAuth = useSelector((state) => state?.auth?.userDetails?.data?.token);
    return isAuth ? children : <Navigate to="/" />
}

export default PrivateRoute