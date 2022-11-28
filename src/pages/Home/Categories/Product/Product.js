import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { brand, picture } = product;
    return (
        <div className="card card-compact my-4 shadow-xl">
            <figure>
                <img src={picture} alt="Laptop" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{brand}</h2>
                <h3 className='font-bold'>price: $</h3>
                <p></p>
                <div className="card-actions justify-end">
                    <Link>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default Product;