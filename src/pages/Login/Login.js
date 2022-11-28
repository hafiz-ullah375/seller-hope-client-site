import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { login } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast('Login Successful')
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message)
            })
    }
    return (
        <div className='h-[700px] flex justify-center items-center  '>
            <div className='w-96 p-7 drop-shadow-2xl border-2 rounded-xl '>
                <h2 className='text-2xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text drop-shadow-xl">Email</span>
                        </label>
                        <input type="email"
                            {...register("email",
                                {
                                    required: 'Email Address is required '
                                })}
                            className="input input-bordered w-full max-w-xs drop-shadow-xl" />
                        {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Password ust be 6 characters or longer' }
                                })}
                            className="input input-bordered w-full max-w-xs drop-shadow-xl" />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>

                    <input className='btn btn-accent w-full drop-shadow-md' value='Login' type="submit" />
                    <div>
                        {loginError && <p>{loginError}</p>}
                    </div>
                </form>
                <p>if don't have an account <Link className='text-secondary' to="/register">Create new account</Link></p>
                <div className="divider drop-shadow-xl">OR</div>
                <button className='btn btn-outline w-full drop-shadow-2xl'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;