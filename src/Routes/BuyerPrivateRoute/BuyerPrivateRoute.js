import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useBuyer from '../../hooks/useBuyer';

const BuyerPrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [buyer, buyerLoader] = useBuyer(user?.email)

    const location = useLocation();
    if (loading || buyerLoader) {
        return <div className="flex justify-center items-center h-screen bg-green-300">
            <div className="grid gap-2">

                <div className="flex items-center justify-center ">Loading
                    <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
                </div>
            </div>

        </div>;
    }
    if (buyer) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default BuyerPrivateRoute;