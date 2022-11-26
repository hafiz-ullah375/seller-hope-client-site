import React from 'react';
import { Link } from 'react-router-dom';


const MyProduct = ({ product }) => {
    console.log(product);


    const { brand, productPicture, productName, description, OriginalPrice, resalePrice, condition, displayName, location, date, useTime, purchaseTime } = product;
    return (
        <div className="card card-compact my-4 shadow-xl bg-purple-100">
            <div className='flex justify-between'>
                <figure className='flex-auto w-2/3 m-2'>
                    <img src={productPicture}
                        className='rounded'
                        alt="Laptop" />
                </figure>
                <div className=' m-2 w-1/2'>
                    <h2 className='text-2xl font-bold'>Brand: {brand}</h2>
                    <h3 className='text-lg font-bold'>name: {productName}</h3>
                    <p className='font-bold'>condition: {condition}</p>
                    <p className='font-bold'>Original Price: ${OriginalPrice}</p>
                    <p className='font-bold'>Resale Price: ${resalePrice
                    }</p>
                    <p className='font-bold'>Location: {location
                    }</p>
                </div>
            </div>
            <div className="card-body">
                <div className='flex justify-around'>
                    <h2 className="card-title">Seller Name: {displayName}</h2>
                    <div className='my-2'>
                        <p className='font-bold'>Uses Time: {useTime}</p>
                        <p className='font-bold'>PurchaseTime: {purchaseTime}</p>
                    </div>
                </div>
                <p >{description}</p>
                <div className="card-actions justify-end">
                    <p className='mt-2'><span className='font-bold'>Post Time:</span> {date}</p>
                    <Link>
                        <button className="btn btn-primary">Book now</button>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default MyProduct;