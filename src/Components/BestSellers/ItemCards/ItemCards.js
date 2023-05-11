import React from 'react';

import './ItemCards.css';

import Card from './Card/Card';
import items from './items.json';

const itemCards = (props) => (
    <div className='ItemCards'>

        {items.map(item => (
            <Card 
                key={item.id} 
                name={item.name} 
                image={item.image} 
                stars={item.stars} 
                price={item.price} 
                discountedPrice={item.discountedPrice} 
                colors={item.colors} 
                label={item.label}     
            />
        ))}
    </div>
);

export default itemCards;