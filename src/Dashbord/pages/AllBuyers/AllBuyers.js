import React, { useEffect, useState } from 'react';

import toast from 'react-hot-toast';
import Buyer from './Buyer';

const AllBuyers = () => {

    const [buyers, setBuyers] = useState([])
    const [loader, setLoader] = useState(true)
    console.log(buyers);

    useEffect(
        () => {

            fetch('http://localhost:4000/allUser')
                .then((res) => res.json())
                .then(data => {
                    const filters = data.filter(buyer => buyer?.role === "buyer")
                    setLoader(false)
                    setBuyers(filters)

                    console.log(filters);
                })
        }
        , [])
    const handleDelete = id => {

        fetch(`http://localhost:4000/user/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((data => {
                if (data.deletedCount > 0) {
                    window.confirm('you want delete')
                    toast.success('delete success')
                    const remaining = buyers.filter(buyer => buyer._id !== id);
                    setBuyers(remaining)
                }
            }))
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete User</th>

                        </tr>
                    </thead>
                    <tbody className='grid lg:grid-cols-2 md:grid-cols-2 gap-6 lg:mx-8 my-8'>
                        {
                            buyers.map(buyer => <Buyer
                                key={buyer._id}
                                buyer={buyer}
                                handleDelete={handleDelete}
                            ></Buyer>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBuyers;


