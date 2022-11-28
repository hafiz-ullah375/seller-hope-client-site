import React, { useEffect, useState } from 'react';
import Seller from './Seller';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const [sellers, setSellers] = useState([])
    const [loader, setLoader] = useState(true)


    useEffect(
        () => {

            fetch('https://sellers-hope-server.vercel.app/allUser')
                .then((res) => res.json())
                .then(data => {
                    const sellers = data.filter(seller => seller?.role === "seller")
                    setLoader(false)
                    setSellers(sellers)


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
                    const remaining = sellers.filter(seller => seller._id !== id);
                    setSellers(remaining)
                }
            }))
    }
    return (
        <div>
            <div className="overflow-x-auto sm:w-screen lg:w-4/5 mx-auto">
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete User</th>

                        </tr>
                    </thead>
                    <tbody className=' lg:mx-8 my-8'>
                        {
                            sellers.map(seller => <Seller
                                key={seller._id}
                                seller={seller}
                                handleDelete={handleDelete}
                            ></Seller>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllSellers;


