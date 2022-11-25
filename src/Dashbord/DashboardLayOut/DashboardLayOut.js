import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../pages/Nabvar/Navbar';

const DashboardLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayOut;