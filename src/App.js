import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Circles from './components/Circles/Circles';
import AboutMe from './components/AboutMe/AboutMe';
import Services from './components/Services/Services';
import Individual from './components/Individual/Individual';
import Prices from './components/Prices/Prices';
import Features from "./components/Features/Features";
import Consultation from "./components/Consultation/Consultation";
import Contacts from "./components/Contacts/Contacts";

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
      <Features />
      <Consultation />
      <Contacts/>
    </div>
  );
}

export default App;
