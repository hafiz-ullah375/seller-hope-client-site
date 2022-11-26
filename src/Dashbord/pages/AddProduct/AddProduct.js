import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';





const AddProduct = () => {
    const { register, handleSubmit, } = useForm();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const submitProduct = data => {
        console.log(data);
        const { displayName, email } = user;
        const { brand, condition, OriginalPrice, description, location, mobileNumber, productName, productPicture, purchaseTime, resalePrice, useTime } = data;

        const currentDate = new Date().toLocaleDateString();
        const currentTime = new Date().toLocaleTimeString();
        const date = currentTime + ' ' + currentDate

        const productInfo = { brand, condition, OriginalPrice, description, location, mobileNumber, productName, productPicture, purchaseTime, resalePrice, useTime, displayName, email, date }
        fetch('http://localhost:4000/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/dashboard/myProducts')
            })



    }
    return (
        <div className=' flex justify-center items-center'>
            <div>
                <h2 className='text-2xl text-center font-bold'>Add Product</h2>
                <form onSubmit={handleSubmit(submitProduct)}>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mx-8  sm:m-0">
                        <div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Product Name </span>
                                </label>
                                <input type="text"
                                    {...register('productName', {
                                        required: 'Product name is required'
                                    })}
                                    className="input input-bordered w-full " />


                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Original Price</span>
                                </label>
                                <input type="text"
                                    {...register('OriginalPrice', {
                                        required: 'Original Price is required'
                                    })}
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text"
                                    {...register('location', {
                                        required: 'location is required'
                                    })}
                                    className="input input-bordered w-full max-w-xs" />


                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Resale price</span>
                                </label>
                                <input type="text"
                                    {...register('resalePrice', {
                                        required: 'Resale Price is required',

                                    })}
                                    className="input input-bordered w-full max-w-xs" />


                            </div>
                            <label className="label text-center">
                                <span className="label-text ">chose a Brand</span>
                            </label>
                            <div className='flex justify-center items-center'> <select className='btn bg-emerald-800 ' {...register("brand")}>
                                <option value="apple">Apple</option>
                                <option value="asus">Asus</option>
                                <option value="hp">HP</option>
                            </select></div>

                        </div>
                        <div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text"
                                    defaultValue={user?.displayName}
                                    readOnly
                                    {...register('sellerName', {
                                        required: 'Seller Name is required'
                                    })}
                                    className="input input-bordered w-full max-w-xs" />


                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product Picture</span>
                                </label>
                                <input type="picture"
                                    {...register('productPicture', {
                                        required: 'Product Picture is required'
                                    })}
                                    className="input input-bordered w-full max-w-xs" />


                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Mobile Number</span>
                                </label>
                                <input type="mobileNumber"
                                    {...register('mobileNumber', {
                                        required: 'MobileNumber is required',

                                    })}
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text">use Time</span>
                                </label>
                                <input type="text"
                                    {...register('useTime', {
                                        required: 'use time is required',


                                    })}
                                    className="input input-bordered w-full max-w-xs" />


                            </div>
                            <label className="label">
                                <span className="label-text">Condition</span>
                            </label>
                            <div className='flex justify-center items-center'>

                                <select className='btn bg-emerald-800 ' {...register("condition")}>
                                    <option value="excellent">Excellent</option>
                                    <option value="Good">Good</option>
                                    <option value="fair">Fair</option>
                                </select>
                            </div>

                        </div>
                        <div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text"> Purchase Time</span>
                                </label>
                                <input type="text"
                                    {...register('purchaseTime', {
                                        required: 'Purchase time is required'
                                    })}
                                    className="input input-bordered w-full max-w-xs" />


                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="text"
                                    defaultValue={user?.email}
                                    readOnly
                                    {...register('sellerGmail', {
                                        required: 'Seller Gmail is required'
                                    })}
                                    className="input input-bordered w-full max-w-xs" />


                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>

                                <textarea
                                    type="text"
                                    {...register('description', {
                                        required: 'MobileNumber is required',

                                    })}
                                    className="textarea input input-bordered w-full max-w-xs"

                                    placeholder="Bio"></textarea>

                            </div>
                        </div>
                    </div>

                    <div className='text-center'>
                        <input className='btn  btn-accent  w-1/2 mt-4' value='Add Product' type="submit" />

                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddProduct;