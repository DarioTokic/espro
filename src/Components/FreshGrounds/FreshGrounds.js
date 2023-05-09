import React from 'react';

import './FreshGrounds.css';

import background from '../../assets/freshGrounds.png';
import playBtn from '../../assets/playButton.svg';

const freshGrounds = (props) => (
    <div className='FreshGrounds'>
        <h1 className='title'>FRESH GROUNDS. 01</h1>
        <h1 className='title'>FRESH GROUNDS. 01</h1>
        <div 
            className='video'
            style={{backgroundImage: `url(${background})`}}
        >
            <h2>EPISODE 01: THE GREAT MIGRATION</h2>
            <h1>FRESH GROUNDS</h1>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br/>
                sed diam nonumy eirmod tempor invidunt ut labore et.
            </p>
            <button onClick={() =>window.location.href='https://vimeo.com/574425747/e180e54244'}><img src={playBtn} alt='playBtn'/> WATCH FILM</button>
        </div>
    </div>
);

export default freshGrounds;