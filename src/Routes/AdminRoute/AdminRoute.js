import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [admin] = useAdmin(user?.email)

    const location = useLocation();
    if (loading) {
        return <progress className="progress w-56"></progress>;
    }
    if (user & admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;