import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { brand, name, picture } = category;

    return (
        <Link to={`/allProducts/${brand}`}>
            <div className="card    shadow-xl image-full text-center">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-center">{brand}</h2>
                    <p>{name}</p>

                </div>
            </div>
        </Link>
    );
};

export default Category;