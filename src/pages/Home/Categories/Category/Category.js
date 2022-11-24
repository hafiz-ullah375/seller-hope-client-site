import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { brand, picture } = category;
    console.log(category);
    return (
        <Link>
            <div className="card    shadow-xl image-full text-center">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brand}</h2>
                    <p>{brand}</p>

                </div>
            </div>
        </Link>
    );
};

export default Category;