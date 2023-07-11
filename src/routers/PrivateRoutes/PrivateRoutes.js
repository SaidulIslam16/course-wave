import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user } = useContext(AuthContext)
    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
};

export default PrivateRoutes;