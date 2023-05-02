import React from 'react';

import './ItemCards.css';

import Card from './Card/Card';

import espro1 from '../../../assets/espro1.webp'
import espro2 from '../../../assets/espro2.webp'

const itemCards = (props) => (
    <div className='ItemCards'>
        <Card image={espro1} stars='5' title='ESPRO COFFEE FRENCH PRESS P7' startingPrice='109.95' endingPrice='139.95' />
        <Card image={espro2} stars='4' title='ESPRO COFFEE FRENCH PRESS P7' startingPrice='109.95' endingPrice='139.95' />
        <Card image={espro2} stars='4' title='ESPRO COFFEE FRENCH PRESS P7' startingPrice='109.95' endingPrice='139.95' />
        <Card image={espro2} stars='4' title='ESPRO COFFEE FRENCH PRESS P7' startingPrice='109.95' endingPrice='139.95' />
        <Card image={espro2} stars='4' title='ESPRO COFFEE FRENCH PRESS P7' startingPrice='109.95' endingPrice='139.95' />
        <Card image={espro2} stars='4' title='ESPRO COFFEE FRENCH PRESS P7' startingPrice='109.95' endingPrice='139.95' />
        <Card image={espro2} stars='4' title='ESPRO COFFEE FRENCH PRESS P7' startingPrice='109.95' endingPrice='139.95' />
        <Card image={espro2} stars='4' title='ESPRO COFFEE FRENCH PRESS P7' startingPrice='109.95' endingPrice='139.95' />
        <Card image={espro2} stars='4' title='ESPRO COFFEE FRENCH PRESS P7' startingPrice='109.95' endingPrice='139.95' />
    </div>
);

export default itemCards;