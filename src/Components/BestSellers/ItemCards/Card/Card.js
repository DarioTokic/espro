import React from 'react';

import './Card.css';

import star from '../../../../assets/star.svg';
import starEmpty from '../../../../assets/starEmpty.svg';

const card = (props) => (
    <div className='Card'>
        <img src={props.image} alt='productImage' />
        { props.label ?
            <div 
                className='label' 
                style={{backgroundColor: 
                    props.label === "SALE" ? 
                    "#F24343" : 
                    props.label === "NEW!" ? 
                    "#6BBBAE" : 
                    props.label === "BACK IN STOCK" ? 
                    "#8DB9CA" : 
                    null }}
            >
                <p>{props.label}</p>
            </div>
            : null
        }
        
        <div className='description'>
        <div className='stars'>
            {[1, 2, 3, 4, 5].map((index) => (
                <img
                key={index}
                src={index <= props.stars ? star : starEmpty}
                alt={index <= props.stars ? 'star' : 'starEmpty'}
                />
            ))}
        </div>
        <h1 className='prodTitle'>{props.name}</h1>
        <div className='prodPrice'>
            <p>{props.price}</p>
            <span><s>{props.discountedPrice}</s></span>
        </div>
        <div className='colors'>
            {
                props.colors.map((color, index) => <div 
                                            className={`color ${index === 0 ? 'active' : ''}`}
                                            style={{backgroundColor: color}} 
                                            onClick={(e) => {
                                                const parent = e.target.parentNode;
                                                const colors = parent.querySelectorAll('.color');
                                                colors.forEach(color => color.classList.remove('active'));
                                                e.target.classList.add('active')
                                            }}  
                                        />)
            }
        </div>
        </div>
        
    </div>
);

export default card;