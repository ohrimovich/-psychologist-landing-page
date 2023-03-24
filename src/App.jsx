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
import Footer from "./components/Footer/Footer";
import GoTopButton from "./components/GoTopButton/GoTopButton";
import Modal from "./components/Modal/Modal";
import { useState } from 'react';

function App() {

  const [modalActive, setModalActive] = useState(false);
  const [thanksModalShow, setThanksModalShow] = useState(false);

	return (
    <div className="App">
      <Circles />
      <Header />
      <Hero isModalOpen={setModalActive} />
      <AboutMe />
      <Services />
      <Individual />
      <Prices isModalOpen={setModalActive} />
      <Features />
      <Consultation isModalOpen={setModalActive} setThanksModalShow={setThanksModalShow} />
      <Contacts />
      <Footer />
      <GoTopButton />
      <Modal active={ modalActive} setActive={setModalActive} thanksModalShow={thanksModalShow} setThanksModalShow={setThanksModalShow} />
    </div>
  );
}

export default App;
