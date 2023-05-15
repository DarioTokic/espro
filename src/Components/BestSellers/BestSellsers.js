import React from 'react';

import './BestSellers.css';

import ItemCards from './ItemCards/ItemCards';

const bestSellers = (props) => (
    <div className='BestSellers'>
        <div className='title'>
            <h2>POUR YOUR BEST CUP WITH</h2>
            <h1>OUR BEST SELLERS</h1>
        </div>

        <ItemCards />
    </div>
);

export default bestSellers;