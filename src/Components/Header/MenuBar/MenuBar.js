import React from 'react';
import './MenuBar.css';

import logo from '../../../assets/esproLogo.svg';
import searchLine from '../../../assets/searchLine.svg';
import myAccount from '../../../assets/myAccount.svg';
import shoppingBagIcon from '../../../assets/shoppingBagIcon.svg';
import arrowIosDownwardFill from '../../../assets/arrow-ios-downward-fill.svg'

const MenuBar = (props) => {

    return (
        <div 
            className='MenuBar'
            onMouseLeave={props.hideItems} 
        >
            <div className='left'>
                <button
                onMouseEnter={props.showItems}
                onClick={props.isShown ? props.hideItems : props.showItems}
                className='shopBtn'
            >SHOP <img src={arrowIosDownwardFill} alt='arrowIosDownwardFill'/></button>
                <button className='ourStoryBtn'>OUR STORY</button>
            </div>

            <div className='center'>
                <img src={logo} alt='whiteEsproLogo'/>
            </div>
            
            <div className='right'>
                <button className='brewGuidesBtn'>BREW GUIDES</button>
                <button className='blogBtn'>BLOG</button>
                <div className='right'>
                    <button className='searchLineBtn'><img src={searchLine} alt='searchLine'/></button>
                    <button className='searchLineBtn'><img src={myAccount} alt='myAccount'/></button>
                    <button className='searchLineBtn'><img src={shoppingBagIcon} alt='shoppingBagIcon'/></button>
                    <span>0</span>
                </div>
            </div>
        </div>
    )
};

export default MenuBar