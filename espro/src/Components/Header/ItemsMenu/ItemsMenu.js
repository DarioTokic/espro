import React from 'react';

import Item from './Item/Item';
import './ItemsMenu.css'

import frenchPress from '../../../assets/frenchPress.png';
import travelPress from '../../../assets/travelPress.png';
import pourOver from '../../../assets/pourOver.png';

const itemsMenu = (props) => (
    <div className='ItemsMenu'>
        <Item image={frenchPress} name='French Press' />
        <Item image={travelPress} name='Travel Press' />
        <Item image={pourOver} name='Pour Over' />
    </div>
)

export default itemsMenu;