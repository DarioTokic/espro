import React, { useState } from 'react';
import './Header.css';

import MenuBar from './MenuBar/MenuBar';
import ItemsMenu from './ItemsMenu/ItemsMenu';
import MobileMenu from './MobileMenu/MobileMenu';

const Header = (props) => {
    const [isShown, setIsShown] = useState(false);
    const [mobileIsShown, setMobileIsShown] = useState(false);

    return (
        <div className='Header'>
            <div className='BlueBar'>
                <p>FREE SHIPPING ON ALL U.S. ORDERS $49.</p>
            </div>
            <MenuBar
                showItems={() => setIsShown(true)}
                hideItems={() => setIsShown(false)}
                isShown={isShown}   

                showMenu={() => setMobileIsShown(true)}
                hideMenu={() => setMobileIsShown(false)}
                mobileIsShown={mobileIsShown}
            />
            {
                !mobileIsShown && (
                   <MobileMenu />
                )
            }
            {isShown && (
                <ItemsMenu
                    showItems={() => setIsShown(true)}
                    hideItems={() => setIsShown(false)}   
                />
            )}
        </div>
    )
};

export default Header;