import React from 'react';

import './ItemCards.css';

import Card from './Card/Card';

import espro1 from '../../../assets/espro1.webp'
import espro2 from '../../../assets/espro2.webp'
import espro3 from '../../../assets/espro3.png'

const itemCards = (props) => (
    <div className='ItemCards'>
        <Card image={espro1} stars='5' title='ESPRO COFFEE FRENCH PRESS P7' startingPrice='109.95' endingPrice='139.95' colors={('#F6F6F6', '#FFFFFF', '#000000')} />
        <Card image={espro2} stars='4' title='ESPRO COFFEE FRENCH PRESS P7' startingPrice='109.95' endingPrice='139.95' colors={('#F6F6F6', '#000000')} />
        <Card image={espro3} stars='5' title='BLOOM POUR OVER COFFEE BREWING KIT, 18 OZ' startingPrice='109.95' endingPrice='139.95' />
    </div>
);

export default itemCards;