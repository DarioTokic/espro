import React from 'react';

import './Footer.css';

import Dot from '../Dot/Dot';

import esproLogowhite from '../../assets/esproLogoWhite.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';

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
                    <input type='text' placeholder='Enter your email address' ></input>
                    <input type='submit' value='SIGN UP'></input>
                </form>
            </div>
        </div>
        <div className='dots'>
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
            <Dot colour="#fff" />
        </div>
        <div className='mid'>
            <div className='col'>
                <img className='esproLogo' src={esproLogowhite} alt='esproLogoWhite' />
                <h1>We're here to help.</h1>
                <p>service@espro.com</p>
                <p>1.844.377.7622</p>
            </div>
            <div className='col'>
                <h1>LEARN</h1>
                <p>Blog</p>
                <p>Our Story</p>
                <p>Brew Gudes</p>
                <p>Retailers</p>
            </div>
            <div className='col'>
                <h1>SUPPORT</h1>
                <p>FAQ</p>
                <p>Shipping & Returns</p>
                <p>Our Guarantee</p>
            </div>
            <div className='col'>
                <h1>COMPANY</h1>
                <p>Contact</p>
                <p>Join Us</p>
                <p>Press</p>
            </div>
            <div className='col'>
                <h1>CONNECT WITH US</h1>
                <div className='logos'>
                    <img className='media' src={facebook} alt='facebook' />
                    <img className='media' src={instagram} alt='instagram' />
                    <img className='media' src={twitter} alt='twitter' />
                </div>
            </div>
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