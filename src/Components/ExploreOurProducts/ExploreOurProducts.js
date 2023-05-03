import React from 'react';

import './ExploreOurProducts.css';

import ProductCard from './ProductCard/ProductCard';

import img11 from '../../assets/section3_11.png';
import img12 from '../../assets/section3_12.png';
import img21 from '../../assets/section3_21.png';
import img22 from '../../assets/section3_22.png';
import img31 from '../../assets/section3_31.png';
import img32 from '../../assets/section3_32.png';

const exploreOurProducts = (props) => (
    <div className='ExploreOurProducts'>
        <h1>EXPLORE OUR PRODUCTS</h1>
        <div className='cards'>
            <ProductCard img1={img11} img2={img12} name='FRENCH PRESS' />
            <ProductCard img1={img21} img2={img22} name='POUR OVER' />
            <ProductCard img1={img31} img2={img32} name='COLD BREW' />
        </div>
        <button className='shopBtn'>SHOP ALL PRODUCTS</button>
    </div>
);

export default exploreOurProducts;