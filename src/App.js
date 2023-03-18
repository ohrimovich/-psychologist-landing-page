import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Circles from './components/Circles/Circles';
import AboutMe from './components/AboutMe/AboutMe';
import Services from './components/Services/Services';
import Individual from './components/Individual/Individual';
import Prices from './components/Prices/Prices';

function App() {
	return (
    <div className="App">
      <Circles />
      <Header />
      <Hero />
      <AboutMe />
      <Services />
      <Individual />
      <Prices />
    </div>
  );
}

export default App;
