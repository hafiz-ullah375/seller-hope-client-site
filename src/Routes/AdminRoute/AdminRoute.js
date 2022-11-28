import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [admin, isAdminLoading] = useAdmin(user?.email)

    const location = useLocation();
    if (loading || isAdminLoading) {
        return <div className="flex justify-center items-center h-screen bg-green-300">
            <div className="grid gap-2">

                <div className="flex items-center justify-center ">Loading
                    <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
                </div>
            </div>

        </div>;
    }
    if (user && admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;