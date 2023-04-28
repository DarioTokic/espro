import React from 'react';

import './Card.css';

const card = (props) => (
    <div className='Card'>
        <img src={props.img} />
        <div className='stars'>
            <p>dodati zvjezde</p>
        </div>
        <h1>{props.title}</h1>
        <p>${props.startingPrice} - ${props.endingPrice}</p>
        <div className='colours'>
            <p>dodati boje</p>
        </div>
    </div>
);

export default card;