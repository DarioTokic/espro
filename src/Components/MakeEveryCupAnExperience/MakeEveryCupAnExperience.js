import React, { useEffect } from 'react';

import './MakeEveryCupAnExperience.css';

import img1 from '../../assets/section4_1.png';
import img2 from '../../assets/section4_2.png';
import img3 from '../../assets/section4_3.png';
import img4 from '../../assets/section4_4.png';
import img5 from '../../assets/section4_5.png';

import Dot from '../Dot/Dot';

const MakeEveryCupAnExperience = (props) => {

    useEffect(() => {

        var imageIndex = 0;
        
        const carousel = () => {
            const images = document.querySelectorAll('.slides');
            images.forEach((image) => {
                        image.style.display = 'none';
            });

            imageIndex++;

            if (imageIndex > images.length) { imageIndex = 1; }
            images[imageIndex - 1].style.display = 'block';
            setTimeout(carousel, 2000);
        }
        

        carousel();
    })

    return (
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
                <div className='carousel'>
                    <img className='img2 slides' src={img2} alt='img2' />
                    <img className='img3 slides' src={img3} alt='img3' />
                    <img className='img4 slides' src={img4} alt='img4' />
                    <img className='img5 slides' src={img5} alt='img5' />
                </div>
                <h1>PRESS. SIP. ENJOY.</h1>
            </div>
            <div className='dots'>
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
                <Dot colour='#fff' />
            </div>
        </div>
    );
}; 

export default MakeEveryCupAnExperience;