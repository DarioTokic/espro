import React from 'react';

import './ShowUs.css';

import instagram from '../../assets/instagramDark.svg';
import img1 from '../../assets/section8_1.png';
import img2 from '../../assets/section8_2.png';
import img3 from '../../assets/section8_3.png';
import img4 from '../../assets/section8_4.png';
import img5 from '../../assets/section8_5.png';
import img6 from '../../assets/section8_6.png';

const showUs = (props) => (
    <div className='ShowUs'>
        <div className='title'>
            <div className='left'>
                <h1>SHOW US YOUR BEST POUR.</h1>
                <p>
                    Making coffee better — one cup at a time.<br/>
                    Share your best ☕ moments with us  <b>#ESPRO</b>
                </p> 
            </div>
            <div className='right'>
                <button><img src={instagram} alt='instagram' /> FOLLOW US ON INSTAGRAM</button>
            </div>
        </div>
        <div className='images'>
            <img src={img1} className='up' alt='img1' />
            <img src={img2} className='down' alt='img2' />
            <img src={img3} className='up' alt='img3' />
            <img src={img4} className='down' alt='img4' />
            <img src={img5} className='up' alt='img5' />
            <img src={img6} className='down' alt='img6' />
        </div>
    </div>
);

export default showUs;