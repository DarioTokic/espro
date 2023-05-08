import React, { Component } from 'react'

import './InThePress.css';

import pastLogo from '../../assets/pastLogo.png';
import homegroundsLogo from '../../assets/homegroundsLogo.png';
import marthaStewartLogo from '../../assets/marthaStewartLogo.png';
import buzzfeedLogo from '../../assets/buzzfeedLogo.png';
import fastcompanyLogo from '../../assets/fastcompanyLogo.png';

class InThePress extends Component {
    state = {
        active: 0,
        quotes: [`“The result is a richly flavored, super aromatic cup of coffee without the usual silt in the bottom. The press isn’t just for coffee, either—there’s also a tea filter available that isolates tea leaves to prevent oversteeping.”`,
                `"Indulge in a truly immersive coffee experience with our innovative brewing method, delivering a full-bodied, exquisitely aromatic cup, free from any sediment. And don't forget, our press goes beyond coffee - explore the world of teas with our specialized filter, ensuring a perfectly steeped brew every time."`,
                `"Unlock the true essence of coffee with our exceptional French press. Immerse yourself in the richness of flavors, capturing every note and nuance, while leaving behind a clean, sediment-free brew. Plus, for tea enthusiasts, our thoughtfully designed tea filter guarantees optimal extraction, allowing you to savor the delicate flavors without the risk of oversteeping."`,
                `"Elevate your coffee ritual to new heights with our revolutionary press, delivering a profoundly flavorful and aromatic cup, free from any unwanted residue. But wait, there's more! Tea lovers rejoice as our dedicated tea filter preserves the integrity of your favorite leaves, ensuring a perfectly balanced infusion, sip after sip."`,
                `"Experience coffee like never before with our game-changing French press, unveiling a symphony of flavors that dance on your palate. No more sediment at the bottom - just pure, unadulterated indulgence in every sip. And for tea aficionados, our purpose-built filter ensures precise extraction, safeguarding against oversteeping and preserving the essence of your favorite teas."`
            ],
    }

    logoClickHandler = (index) => {
        this.setState({
            active: index
        })
    }

    autoQuoteIterationHandler = () => {
        if (this.state.active < 4 )
        {
            this.setState({
                active: this.state.active + 1
            })
        }
        else 
        {
            this.setState({
                active: 0
            })
        }

        setTimeout(this.autoQuoteIterationHandler, 10000)
    }

    componentDidMount() {
        setTimeout(this.autoQuoteIterationHandler, 10000)
    }

   render() {
        return (
            <div className='InThePress'>
                <h1>IN THE PRESS</h1>
                <p>
                {this.state.active === 0 ?
                    this.state.quotes[0] :
                this.state.active === 1 ?
                    this.state.quotes[1] :
                this.state.active === 2 ?
                    this.state.quotes[2] :
                this.state.active === 3 ?
                    this.state.quotes[3] :
                this.state.quotes[4]

                }
                </p>
                <div className='logos'>
                    <img onClick={() => this.logoClickHandler(0)} className={this.state.active === 0 ? 'active' : ''} src={pastLogo} alt='pastLogo' />
                    <img onClick={() => this.logoClickHandler(1)} className={this.state.active === 1 ? 'active' : ''} src={homegroundsLogo} alt='homegroundsLogo' />
                    <img onClick={() => this.logoClickHandler(2)} className={this.state.active === 2 ? 'active' : ''} src={marthaStewartLogo} alt='marthaStewartLogo' />
                    <img onClick={() => this.logoClickHandler(3)} className={this.state.active === 3 ? 'active' : ''} src={buzzfeedLogo} alt='buzzfeedLogo' />
                    <img onClick={() => this.logoClickHandler(4)} className={this.state.active === 4 ? 'active' : ''} src={fastcompanyLogo} alt='fastcompany logo' />
                </div>
            </div>
        )
   }
};

export default InThePress;