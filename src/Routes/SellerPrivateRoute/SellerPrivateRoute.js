import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


import useSeller from '../../hooks/useSeller';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [seller, sellerLoader] = useSeller(user?.email)

    const location = useLocation();
    if (loading || sellerLoader) {
        return <progress className="progress w-56"></progress>;
    }
    if (user && seller) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;