import React, { useState } from 'react';

import './ProductCard.css';

const ProductCard = (props) => {
    const [isShown, setIsShown] = useState(false);

    return (

        <div 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} 
            className='ProductCard'
            style={{
                '--img1': `url(${props.img1})`,
                '--img2': `url(${props.img2})`,
                'backgroundColor': `${props.colour}`
                }}
        >
            <h1>{props.name}</h1>
            {isShown && (
                <button className='shopBtn'>SHOP NOW</button>
            )

            }
    
        </div>
    )
};

export default ProductCard;