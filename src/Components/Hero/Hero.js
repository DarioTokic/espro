import React from 'react';

import './Hero.css';
import arrowdown from '../../assets/arrow-right-short.svg';

const hero = (props) => (
    <div 
        className='Hero'
    >
        <div className='center'>
            <h1>BREW ANYWHERE. BE ANYWHERE.</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                magna aliquyam erat, sed diam voluptua. At vero eos et 
                accusam et justo duo.
            </p>
            <button className='heroBtn'>POUR ON THE GO</button>

            <button className='exploreBtn' onClick={(event) => {
                event.target.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.querySelector('.BestSellers').scrollIntoView({ behavior: 'smooth'})
            })}}>EXPLORE <img src={arrowdown} alt='arrowdown' /></button>
        </div>
    </div>
);

export default hero;