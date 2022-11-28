import React, { useContext } from 'react';
import { useQuery, } from '@tanstack/react-query'
import Category from '../Category/Category';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
const Categories = () => {
    const { loading } = useContext(AuthContext)
    const { data: categories = [], } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('https://sellers-hope-server.vercel.app/categories')
            .then(res => res.json())
    })
    // if (loading) {
    //     return ('loading')
    // }
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mx-8 my-8'>

            {
                categories && categories.map(category => <Category
                    key={category._id}
                    category={category}
                ></Category>)
            }
        </div>
    );
};

export default Categories;