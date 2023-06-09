import './App.css';

import { Parallax } from 'react-parallax';

import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import BestSellers from './Components/BestSellers/BestSellsers';
import DesignedForRealLife from './Components/DesignedForRealLife/DesignedForRealLife';
import ExploreOurProducts from './Components/ExploreOurProducts/ExploreOurProducts';
import MakeEveryCupAnExperience from './Components/MakeEveryCupAnExperience/MakeEveryCupAnExperience';
import InThePress from './Components/InThePress/InThePress';
import FreshGrounds from './Components/FreshGrounds/FreshGrounds';
import Footer from './Components/Footer/Footer';
import ShowUs from './Components/ShowUs/ShowUs';
import TheUltimateBrewGuides from './Components/TheUltimateBrewGuides/TheUltimateBrewGuides';

import heroBg from './assets/heroBackground.png';
import upArrow from './assets/arrow-ios-downward-fill.svg';

function App() {
  return (
    <div className="App">
      <Header/>
      <Parallax strength={300} bgImage={heroBg}>
        <Hero />
      </Parallax>
      <BestSellers />
      <DesignedForRealLife />
      <ExploreOurProducts />
      <MakeEveryCupAnExperience />
      <InThePress />
      <FreshGrounds />
      <TheUltimateBrewGuides />
      <ShowUs />
      <Footer />
      <img onClick={(e) => { e.preventDefault(); document.querySelector('.Header').scrollIntoView({behavior: 'smooth'})}} className='backUp' src={upArrow} alt="up arrow"/>
    </div>
  );
}

export default App;
