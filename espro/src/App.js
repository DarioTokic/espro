import './App.css';

import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import BestSellers from './Components/BestSellers/BestSellsers';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <BestSellers />
    </div>
  );
}

export default App;
