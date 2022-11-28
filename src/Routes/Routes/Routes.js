import { createBrowserRouter } from "react-router-dom";
import DashboardLayOut from "../../Dashbord/DashboardLayOut/DashboardLayOut";
import AddProduct from "../../Dashbord/pages/AddProduct/AddProduct";
import AllBuyers from "../../Dashbord/pages/AllBuyers/AllBuyers";
import AllSellers from "../../Dashbord/pages/AllSellers/AllSellers";
import MyOrders from "../../Dashbord/pages/MyOrders/MyOrders";
import MyProducts from "../../Dashbord/pages/MyProducts/MyProducts";

import Main from "../../LayOut/Main";
import Blogs from "../../pages/Blogs/Blogs";
import AllProducts from "../../pages/Home/Categories/AllProducts/AllProducts";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerPrivateRoute from "../BuyerPrivateRoute/BuyerPrivateRoute";

import SellerPrivateRoute from "../SellerPrivateRoute/SellerPrivateRoute";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/allProducts/:brand',
                element: <AllProducts></AllProducts>,
                loader: ({ params }) => fetch(`http://localhost:4000/itemByCategory/${params.brand}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayOut></DashboardLayOut>,
        children: [
            {
                path: '/dashboard/addProduct',
                element: <SellerPrivateRoute><AddProduct></AddProduct></SellerPrivateRoute>
            },
            {
                path: '/dashboard/myOrders',
                element: <BuyerPrivateRoute><MyOrders></MyOrders></BuyerPrivateRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerPrivateRoute><MyProducts></MyProducts></SellerPrivateRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute> <AllBuyers></AllBuyers></AdminRoute>
            }
        ]
    }

])
export default router;