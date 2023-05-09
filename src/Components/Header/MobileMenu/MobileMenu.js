import React from 'react';

import './MobileMenu.css';


import searchLine from '../../../assets/searchLine.svg';
import myAccount from '../../../assets/myAccount.svg';
import shoppingBagIcon from '../../../assets/shoppingBagIcon.svg';
import arrowIosDownwardFill from '../../../assets/arrow-ios-downward-fill.svg';

const MobileMenu = () => (
    <div className='MobileMenu'>
        <div className='left'>
            <button className='searchLineBtn'><img src={searchLine} alt='searchLine'/></button>
            <button className='searchLineBtn'><img src={myAccount} alt='myAccount'/></button>
            <button className='searchLineBtn'><img src={shoppingBagIcon} alt='shoppingBagIcon'/></button>
            <span>0</span>
        </div>

        <div className='right'>
            <button
                className='shopBtn'
             >SHOP <img src={arrowIosDownwardFill} alt='arrowIosDownwardFill'/></button>
            <button className='ourStoryBtn'>OUR STORY</button>
        
            <button className='brewGuidesBtn'>BREW GUIDES</button>
            <button className='blogBtn'>BLOG</button>
            
        </div>
                
    </div>
);

export default MobileMenu;