import React from 'react';

import './Card.css';

import star from '../../../../assets/star.svg';
import starEmpty from '../../../../assets/starEmpty.svg';

const card = (props) => (
    <div className='Card'>
        <img src={props.image} alt='productImage' />
        <div className='description'>
            {props.stars === '5' ?
                <div className='stars'>
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                </div>
            :props.stars === '4' ?
                <div className='stars'>
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={starEmpty} alt='starEmpty' />
                </div>
            :props.stars === '3' ?
                <div className='stars'>
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={starEmpty} alt='starEmpty' />
                    <img src={starEmpty} alt='starEmpty' />
                </div>
            :props.stars === '2' ?
                <div className='stars'>
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={starEmpty} alt='starEmpty' />
                    <img src={starEmpty} alt='starEmpty' />
                    <img src={starEmpty} alt='starEmpty' />
                </div>
            :props.stars === '1' ?
                <div className='stars'>
                    <img src={star} alt='star' />
                    <img src={starEmpty} alt='starEmpty' />
                    <img src={starEmpty} alt='starEmpty' />
                    <img src={starEmpty} alt='starEmpty' />
                    <img src={starEmpty} alt='starEmpty' />
                </div>
            :   <div className='stars'>
                    <img src={starEmpty} alt='starEmpty' />
                    <img src={starEmpty} alt='starEmpty' />
                    <img src={starEmpty} alt='starEmpty' />
                    <img src={starEmpty} alt='starEmpty' />
                    <img src={starEmpty} alt='starEmpty' />
                </div>
            }
            <h1 className='prodTitle'>{props.title}</h1>
            <p className='prodPrice'>{props.price}</p>
            <div className='colours'>
                <div className='grayProduct'></div>
                <div className='whiteProduct'></div>
                <div className='blackProduct'></div>
            </div>
        </div>
        
    </div>
);

export default card;