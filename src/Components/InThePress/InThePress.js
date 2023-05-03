import React from 'react';

import './InThePress.css';

import pastLogo from '../../assets/pastLogo.svg';
import homegroundsLogo from '../../assets/homegroundsLogo.png';
import marthaStewartLogo from '../../assets/marthaStewartLogo.png';
import buzzfeedLogo from '../../assets/buzzfeedLogo.png';
import fastcompanyLogo from '../../assets/fastcompanyLogo.png';

const inThePress = (props) => (
    <div className='InThePress'>
        <h1>IN THE PRESS</h1>
        <p>
        “The result is a richly flavored, super aromatic cup of 
        coffee without the usual silt in the<br/> bottom. The press 
        isn’t just for coffee, either—there’s also a tea filter 
        available that <br/> isolates tea leaves to prevent oversteeping.”
        </p>
        <div className='logos'>
            <img src={pastLogo} alt='pastLogo' />
            <img src={homegroundsLogo} alt='homegroundsLogo' />
            <img src={marthaStewartLogo} alt='marthaStewartLogo' />
            <img src={buzzfeedLogo} alt='buzzfeedLogo' />
            <img src={fastcompanyLogo} alt='fastcompany logo' />
        </div>
    </div>
);

export default inThePress;