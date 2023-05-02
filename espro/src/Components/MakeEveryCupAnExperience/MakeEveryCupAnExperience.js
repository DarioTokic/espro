import React from 'react';

import './MakeEveryCupAnExperience.css';

import img1 from '../../assets/section4_1.png';
import img2 from '../../assets/section4_2.png';

const makeEveryCupAnExperience = (props) => (
    <div className='MakeEveryCupAnExperience'>
        <div 
            className='left'
            style={{backgroundImage: `url(${img1})`}}
        >
            <h1>MAKE EVERY CUP AN EXPERIENCE.</h1>
            <p>
                Have your French pressed coffee anywhere with ESPRO’s 
                Travel Press. A double micro-filter eliminates grit for 
                your smoothest cup on the go, and the mug fits right in 
                a car cup holder or bike’s water bottle cage.
            </p>
            <button>SHOP TRAVEL PRESS</button>
        </div>
        <div className='right'>
            <img src={img2} alt='img2' />
            <h1>PRESS. SIP. ENJOY.</h1>
        </div>
    </div>
);

export default makeEveryCupAnExperience;