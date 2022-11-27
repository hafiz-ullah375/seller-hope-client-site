import React from 'react';

const Buyer = ({ buyer, handleDelete }) => {
    const { name, email, _id } = buyer;
    console.log(buyer);

    return (
        <tr>

            <td>{name}</td>
            <td>{email}</td>
            <td onClick={() => handleDelete(_id)}><button>Delete</button></td>
        </tr>
    );

};

export default Buyer;