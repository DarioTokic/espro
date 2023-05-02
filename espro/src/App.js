import './App.css';

import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import BestSellers from './Components/BestSellers/BestSellsers';
import DesignedForRealLife from './Components/DesignedForRealLife/DesignedForRealLife';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <BestSellers />
      <DesignedForRealLife />
    </div>
  );
}

export default App;
