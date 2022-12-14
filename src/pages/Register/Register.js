import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserInfo } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate()
    const handleSignUp = data => {


        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;

                toast('user created successfully')
                const userInfo = {
                    displayName: data.name
                }

                updateUserInfo(userInfo)
                    .then(() => {
                        saveUserInfo(data?.name, data?.email, data.role)
                    })
                    .catch(error => {


                    })
            })
            .catch(error => {

                setSignUpError(error.message)

            })

    }
    const saveUserInfo = (name, email, role) => {
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

                navigate('/')
            })
    }
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register('name', {
                                required: 'name is required'
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register('email', {
                                required: 'email is required'
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register('password', {
                                required: 'password is required',
                                minLength: { value: 6, message: 'password must be 6 character long' },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                    , message: 'password must be strong'
                                }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    </div>
                    <select className='btn' {...register("role")}>
                        <option value="buyer">buyer</option>
                        <option value="seller">seller</option>
                    </select>

                    <input className='btn btn-accent w-full mt-4' value='Sign Up' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account  <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;