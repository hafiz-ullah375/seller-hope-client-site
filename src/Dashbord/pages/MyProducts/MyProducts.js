import React, { useContext, useEffect, useState } from 'react';
// import { useQuery, } from '@tanstack/react-query'
import MyProduct from './MyProduct';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyProducts = () => {
    const [products, setProducts] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {

        fetch(`https://sellers-hope-server.vercel.app/products?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [user?.email])

    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-6 lg:mx-8 my-8'>

                {
                    products && products.map(product => <MyProduct
                        key={product._id}
                        product={product}
                    ></MyProduct>)
                }
            </div>
        </div>
    );
};

export default MyProducts;