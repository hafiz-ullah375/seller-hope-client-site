import React from 'react';

const ExtraCategories = () => {
    return (
        <div className='my-12'>
            <h1 className='text-2xl  text-center'>See some Extra Category</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-6 lg:mx-8 my-8'>

                <div className="card    shadow-xl image-full text-center">
                    <figure><img src="https://waltonbd.com/image/catalog/Computer/Laptop/Tamarind/TAMARIND%20EX10%20Pro%20Series/icon_front2.jpg" alt="laptop" /></figure>
                    <div className="card-body">
                        <h2 className=" text-center"> Walton</h2>
                        <p>resell Walton Computer is Producing Quality laptops at a cheaper price in  Walton has five series of laptops in its arsenal. </p>

                    </div>
                </div>
                <div className="card    shadow-xl image-full text-center">
                    <figure><img src="https://www.cnet.com/a/img/resize/683bcb31b087d67b4ea957b69071691cfe82d302/hub/2022/07/07/63546f99-4d45-49e2-b2fb-55e919287e24/dell-xps-17-9720-2022-0773.jpg?auto=webp&fit=crop&height=1200&width=1200" alt="laptop" /></figure>
                    <div className="card-body">
                        <h2 className=" text-center"> Dell</h2>
                        <p>Dell is an American technology company that develops, sells, repairs, and supports computers and related products and services and is owned by its parent but uses laptop is very useful </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraCategories;