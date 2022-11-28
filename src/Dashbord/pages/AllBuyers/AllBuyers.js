import React, { useEffect, useState } from 'react';

import toast from 'react-hot-toast';
import Buyer from './Buyer';

const AllBuyers = () => {

    const [buyers, setBuyers] = useState([])
    const [loader, setLoader] = useState(true)


    useEffect(
        () => {

            fetch('https://sellers-hope-server.vercel.app/allUser')
                .then((res) => res.json())
                .then(data => {
                    const buyers = data.filter(buyer => buyer?.role === "buyer")
                    setLoader(false)
                    setBuyers(buyers)


                })
        }
        , [])
    const handleDelete = id => {

        fetch(`https://sellers-hope-server.vercel.app/user/delete/${id}`, {
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
            <div className="overflow-x-auto sm:w-screen lg:w-4/5 mx-auto">
                <table className="table w-full">

                    <thead className=''>
                        <tr className='text-center'>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete User</th>

                        </tr>
                    </thead>
                    <tbody className=' lg:mx-8 my-8 '>
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


