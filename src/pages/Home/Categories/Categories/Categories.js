import React from 'react';
import { useQuery, } from '@tanstack/react-query'
import Category from '../Category/Category';
const Categories = () => {
    const { data: categories = [], } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:4000/categories')
            .then(res => res.json())
    })
    // console.log(categories);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mx-8 my-8'>

            {
                categories && categories.map(category => <Category

                    category={category}
                ></Category>)
            }
        </div>
    );
};

export default Categories;