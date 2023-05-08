import React, { useState, useEffect } from 'react';

import './DesignedForRealLife.css';

import img1 from '../../assets/section2_1.png';
import img2 from '../../assets/section2_2.png';
import img3 from '../../assets/section2_3.png';
import img4 from '../../assets/section2_4.png';
import img5 from '../../assets/section2_5.png';
import img6 from '../../assets/section2_6.png';

import Dot from '../Dot/Dot';

const DesignedForRealLife = (props) => {
    const [imageVisible, setImageVisible] = useState(false);

    useEffect(() => {

        const reveal = () => {
            const image1 = document.querySelector('.img1');

            const windowHeight = window.innerHeight;
            const elTop1 = image1.getBoundingClientRect().top + 300

            if(elTop1 < windowHeight) {
                setImageVisible(true);
            } else {
                setImageVisible(false);
            }
        }

        const dots = document.querySelectorAll('.Dot');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
                else {
                    entry.target.classList.remove('visible');
                }
            })
        }, { rootMargin: '-20px'})
        dots.forEach((dot) => {observer.observe(dot)})

        window.addEventListener('scroll', reveal);

        return () => {
                    window.removeEventListener('scroll', reveal);
                }
    });


    return (
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
            <img className={`img1 ${imageVisible ? 'visible': ''}`} src={img1} alt='img1' />
            <img className={`img2 ${imageVisible ? 'visible': ''}`} src={img2} alt='img2' />
            <img className={`img3 ${imageVisible ? 'visible': ''}`} src={img3} alt='img3' />
            <img className={`img4 ${imageVisible ? 'visible': ''}`} src={img4} alt='img4' />
            <img className={`img5 ${imageVisible ? 'visible': ''}`} src={img5} alt='img5' />
            <img className={`img6 ${imageVisible ? 'visible': ''}`} src={img6} alt='img6' />
    
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
}; 

export default DesignedForRealLife;