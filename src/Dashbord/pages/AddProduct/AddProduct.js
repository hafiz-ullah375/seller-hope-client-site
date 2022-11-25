import React from 'react';
import { useForm } from "react-hook-form";





const AddProduct = () => {
    const { register, handleSubmit, } = useForm();
    const handleSignUp = data => {

        console.log(data);




    }
    return (
        <div className=' flex justify-center items-center'>
            <div>
                <h2 className='text-2xl text-center font-bold'>Add Product</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
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
                                        minLength: { value: 6, message: 'password must be 6 character long' },

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
                                    {...register('purchase', {
                                        required: 'Purchase Name is required'
                                    })}
                                    className="input input-bordered w-full max-w-xs" />


                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Seller Gmail</span>
                                </label>
                                <input type="text"
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