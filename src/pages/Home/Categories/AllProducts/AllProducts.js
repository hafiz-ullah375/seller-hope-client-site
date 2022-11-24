import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const AllProducts = () => {

    const products = useLoaderData();

    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-6 lg:mx-8 m-4 '>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }

            </div>
        </div>
    );
};

export default AllProducts;