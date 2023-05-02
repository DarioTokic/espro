import React from 'react';

import './Footer.css';

const footer = (props) => (
    <div className='Footer'>
        <div className='top'>
            <div className='left'>
                <h1>NEVER MISS A DROP.</h1>
                <p>
                    Sign up to be the first to know about exclusive <br/>
                    new deals, product launches and more.
                </p>
            </div>
            <div className='right'>
                <form>
                    <input type='text'></input>
                    <input type='submit' value='SIGN UP'></input>
                </form>
            </div>
        </div>
        <div className='mid'>

        </div>
        <div className='bottom'>
            <p>Copyright © 2021 Espro Inc.</p>
            <div>
                <p style={{paddingRight: "32px"}}>Terms & Privacy</p>
                <p>Patents</p>
            </div>
        </div>
    </div>
);

export default footer;