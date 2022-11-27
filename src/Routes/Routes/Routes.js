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
import PrivateRoute from "../PrivateRoute/PrivateRoute";





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
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
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