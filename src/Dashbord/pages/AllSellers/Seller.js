import React from 'react';

const Seller = ({ seller, handleDelete }) => {
    const { name, email, _id } = seller;
    console.log(seller);

    return (
        <tr className='text-center' >

            <td>{name}</td>
            <td>{email}</td>
            <td onClick={() => handleDelete(_id)}><button>Delete</button></td>
        </tr>
    );

};

export default Seller;