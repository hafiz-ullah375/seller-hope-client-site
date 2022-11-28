import React from 'react';

const Buyer = ({ buyer, handleDelete }) => {
    const { name, email, _id } = buyer;


    return (
        <tr className='text-center'>

            <td>{name}</td>
            <td>{email}</td>
            <td onClick={() => handleDelete(_id)}><button className=''>Delete</button></td>
        </tr>
    );

};

export default Buyer;