import React, { useState } from 'react';
import './Header.css';

import MenuBar from './MenuBar/MenuBar';
import ItemsMenu from './ItemsMenu/ItemsMenu';
import MobileMenu from './MobileMenu/MobileMenu';

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const [mobileIsShown, setMobileIsShown] = useState(false);

  const showItems = () => setIsShown(true);
  const hideItems = () => setIsShown(false);
  const showMenu = () => setMobileIsShown(true);
  const hideMenu = () => setMobileIsShown(false);

  return (
    <div className='Header'>
      <div className='BlueBar'>
        <p>FREE SHIPPING ON ALL U.S. ORDERS $49.</p>
      </div>
      <MenuBar
        showItems={showItems}
        hideItems={hideItems}
        isShown={isShown}
        showMenu={showMenu}
        hideMenu={hideMenu}
        mobileIsShown={mobileIsShown}
      />
      {mobileIsShown && <MobileMenu />}
      {isShown && <ItemsMenu showItems={showItems} hideItems={hideItems} />}
    </div>
  );
};

export default Header;
