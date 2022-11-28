import React from 'react';
import Categories from '../Categories/Categories/Categories';
import Banner from './Banner';
import ExtraCategories from './ExtraCategories';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <ExtraCategories></ExtraCategories>
        </div>
    );
};

export default Home;
