import React from 'react';
import { Link } from 'react-router-dom';

const ExtraCategory = ({ ExtraCategory }) => {
    const { company, name, picture } = ExtraCategory;
    console.log(ExtraCategory);
    return (
        <div>

            <div className="card    shadow-xl image-full text-center">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-center">{company}</h2>
                    <p>{name}</p>

                </div>
            </div>

        </div>
    );
};

export default ExtraCategory;