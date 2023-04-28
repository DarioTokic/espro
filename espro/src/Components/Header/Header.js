import React, { useState } from 'react';
import './Header.css';

import MenuBar from './MenuBar/MenuBar';
import ItemsMenu from './ItemsMenu/ItemsMenu';

const Header = (props) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div>
            <div className='BlueBar'>
                <p>FREE SHIPPING ON ALL U.S. ORDERS $49.</p>
            </div>
            <MenuBar 
                showItems={() => setIsShown(true)}
                hideItems={() => setIsShown(false)}    
            />
            {isShown && (
                <ItemsMenu/>
            )}
        </div>
    )
};

export default Header;