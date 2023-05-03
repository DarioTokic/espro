import React from 'react';

import './TheUltimateBrewGuides.css';

import img1 from '../../assets/section7_1.png';
import img2 from '../../assets/section7_2.svg';

const theUltimateBrewGuides = (props) => (
    <div className='TheUltimateBrewGuides'>
        <div className='left'>
            <h2>THE ULTIMATE BREW GUIDES</h2>
            <h1>COFFEE TO WATER RATIOS: HOW TO <br/>MEASURE COFFEE LIKE A PRO</h1>
            <p>
            <b>You can taste it when you’ve brewed with the perfect coffee to water <br/>ratio.</b>
            The acidity pops every so slightly, enhancing the rich flavors and <br/>aromas. 
            Your coffee’s mouthfeel is smooth and satisfying. And the flavor <br/>is just 
            strong enough that you can sense all its nuances across your <br/>10,000 taste 
            buds, but not so strong that it’s uncomfortable. <br/><br/>It’s an incredible experience—and 
            too often, a hard one to come by.
            </p>
            <button>LEARN MORE</button>
        </div>
        <div className='right'>
            <img className='img1' src={img1} alt='img1' />
            <img className='img2' src={img2} alt='img2' />
        </div>
    </div>
);

export default theUltimateBrewGuides;