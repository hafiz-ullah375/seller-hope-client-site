import React from 'react';
import { useQuery, } from '@tanstack/react-query'
import Seller from './Seller';
const AllSellers = () => {

    const { data: sellers = [], } = useQuery({
        queryKey: ['seller'],
        queryFn: () => fetch(`http://localhost:4000/seller?role=${'seller'}`)
            .then(res => res.json())
    })
    return (
        <div>

            {
                sellers && sellers.map(seller => <Seller
                    key={seller._id}
                    seller={seller}
                ></Seller>)
            }
        </div>
    );
};

export default AllSellers;