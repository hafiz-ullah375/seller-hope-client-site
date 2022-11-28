import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useBuyer from '../../hooks/useBuyer';

const BuyerPrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [buyer, buyerLoader] = useBuyer(user?.email)

    const location = useLocation();
    if (loading || buyerLoader) {
        return <progress className="progress w-56"></progress>;
    }
    if (buyer) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default BuyerPrivateRoute;