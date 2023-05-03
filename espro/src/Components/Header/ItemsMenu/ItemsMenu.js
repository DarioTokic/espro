import React from 'react';

import Item from './Item/Item';
import './ItemsMenu.css'

import frenchPress from '../../../assets/frenchPress.png';
import travelPress from '../../../assets/travelPress.png';
import pourOver from '../../../assets/pourOver.png';

const itemsMenu = (props) => (
    <div 
        className='ItemsMenu'
        onMouseEnter={props.showItems}
        onMouseLeave={props.hideItems} 
    >
        <Item image={frenchPress} name='French Press' />
        <Item image={travelPress} name='Travel Press' />
        <Item image={pourOver} name='Pour Over' />
        <div className='right'>
            <h2>OTHER COLLECTIONS</h2>
            <h1>COLD BREW</h1>
            <h1>ESPRESSO</h1>
            <h1>TASTING CUPS</h1>
            <h1>ACCESSORIES</h1>
            <button>SHOP ALL</button>
        </div>
    </div>
)

export default itemsMenu;