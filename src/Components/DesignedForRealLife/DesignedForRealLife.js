import React from 'react';

import './DesignedForRealLife.css';

import img1 from '../../assets/section2_1.png';
import img2 from '../../assets/section2_2.png';
import img3 from '../../assets/section2_3.png';
import img4 from '../../assets/section2_4.png';
import img5 from '../../assets/section2_5.png';
import img6 from '../../assets/section2_6.png';

import Dot from '../Dot/Dot';

const designedForRealLife = (props) => (
    <div className='DesignedForRealLife'>
        <div className='title'>
            <h2>DESIGNED FOR REAL LIFE</h2>
            <h1>COFFEE MADE FOR YOUR LIFE ON THE GO.</h1>
            <p>We understand coffee is a big part of your busy, 
                active life. That’s why we create and develop 
                products that allow you to bring your passion 
                for <b>coffee-when you want it-</b> and wherever life 
                takes you.
            </p>
        </div>
        <img className='img1' src={img1} alt='img1' />
        <img className='img2' src={img2} alt='img2' />
        <img className='img3' src={img3} alt='img3' />
        <img className='img4' src={img4} alt='img4' />
        <img className='img5' src={img5} alt='img5' />
        <img className='img6' src={img6} alt='img6' />

        <div className='dots'>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
            <Dot className='dot' colour='#659AB1'/>
        </div>
    </div>
);

export default designedForRealLife;