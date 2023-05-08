import React from 'react';

import './Item.css';

const item = (props) => (
    <div className='Item'>
        <img src={props.image} alt='productImage' />
        <a>{props.name}</a>
    </div>
);

export default item;