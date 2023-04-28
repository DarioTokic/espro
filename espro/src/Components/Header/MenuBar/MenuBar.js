import React from 'react';
import './MenuBar.css';

import logo from '../../../assets/esproLogo.svg';
import searchLine from '../../../assets/searchLine.svg';
import myAccount from '../../../assets/myAccount.svg';
import shoppingBagIcon from '../../../assets/shoppingBagIcon.svg';
import arrowIosDownwardFill from '../../../assets/arrow-ios-downward-fill.svg'

const MenuBar = (props) => {

    return (
        <div className='MenuBar'>
            <div className='left'>
                <button
                onMouseEnter={props.showItems}
                onMouseLeave={props.hideItems} 
                className='shopBtn'
            >SHOP <img src={arrowIosDownwardFill}/></button>
                <button className='ourStoryBtn'>OUR STORY</button>
            </div>

            <div className='center'>
                <img src={logo} alt='whiteEsproLogo'/>
            </div>
            
            <div className='right'>
                <button className='brewGuidesBtn'>BREW GUIDES</button>
                <button className='blogBtn'>BLOG</button>
                <div>
                    <button className='searchLineBtn'><img src={searchLine}/></button>
                    <button className='searchLineBtn'><img src={myAccount}/></button>
                    <button className='searchLineBtn'><img src={shoppingBagIcon}/></button>
                    <span>0</span>
                </div>
            </div>
        </div>
    )
};

export default MenuBar