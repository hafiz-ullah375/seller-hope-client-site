import React, { useEffect, useState } from 'react';


const ExtraCategories = () => {
    const [extraSomeCategories, setExtraCategories] = useState([])
    useEffect(() => {
        fetch('https://sellers-hope-server.vercel.app/extra/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setExtraCategories(data)
            })
    }, [])

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mx-8 my-8'>

            {
                extraSomeCategories && extraSomeCategories.map(ExtraCategory => <ExtraCategories
                    key={ExtraCategory._id}
                    ExtraCategory={ExtraCategory}
                ></ExtraCategories>)
            }
        </div>
    );
};

export default ExtraCategories;