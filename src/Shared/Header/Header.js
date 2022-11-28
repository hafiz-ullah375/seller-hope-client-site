import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { HiOutlineLogout } from "react-icons/hi";
import { FaGoogle, FaUser, } from "react-icons/fa";
import ReactTooltip from 'react-tooltip';

const Header = () => {
    const { user, googleProvider, logout } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        googleProvider(provider)
            .then(result => {
                const user = result.user;
                saveUserInfo(user.displayName, user.email)
                console.log(user);

            })
            .catch(error => console.error(error))
    }


    const saveUserInfo = (name, email) => {
        const role = 'buyer'
        const userInfo = { name, email, role }
        fetch('https://sellers-hope-server.vercel.app/storeUsers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Navigate('/')
            })
    }
    return (
        <div className='bg-cyan-600'>
            <div className="navbar  lg:w-11/12  mx-auto py-5">
                <div className="navbar-start w-full">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li className='mx-2'><Link to="/allServices">Service</Link></li>
                            <li><Link to="/addServices">Add Services</Link></li>
                            <li ><Link to="myReview">My Review</Link></li>
                            <li ><Link to="blogs">Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-4xl">Seller’s Hope

                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>


                        <li ><Link to="dashboard">dashboard</Link></li>
                        <li ><Link to="blogs">Blogs</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.uid ?
                        <>
                            <Link className='font-bold text-2xl tooltip-top' data-tip="log out" onClick={logout}><HiOutlineLogout></HiOutlineLogout></Link>
                            {
                                user?.photoURL ?
                                    <>
                                        <img className='w-10 h-10 ml-3 rounded-full ' data-tip={user?.displayName} src={user?.photoURL} alt="" />
                                        <ReactTooltip /></>
                                    :
                                    <FaUser className=' text-3xl text-white '></FaUser>
                            }
                        </>

                        : <>
                            <Link className='font-bold text-xl mr-2' to='/login'> Login </Link>
                            <Link onClick={handleGoogleLogin}> <FaGoogle></FaGoogle> </Link></>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;