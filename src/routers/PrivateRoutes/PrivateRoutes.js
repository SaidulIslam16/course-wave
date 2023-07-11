import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loader } = useContext(AuthContext);

    if (loader) {
        return <div className='text-center text-2xl font-bold'>Loading...</div>
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
};

export default PrivateRoutes;