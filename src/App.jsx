import { useEffect, useState } from 'react';
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
import { getEntriesById } from './helpers/helpers'

const contentful = require('contentful');

const HEADER_ID = process.env.REACT_APP_HEADER_ID;
const HERO_ID = process.env.REACT_APP_HERO_ID;
const ABOUT_ME_ID = process.env.REACT_APP_ABOUT_ME_ID;
const SEVICES_ID = process.env.REACT_APP_SEVICES_ID;
const INDIVIDUAL_ID = process.env.REACT_APP_INDIVIDUAL_ID;
const PRICES_ID = process.env.REACT_APP_PRICES_ID;
const FEATURES_ID = process.env.REACT_APP_FEATURES_ID;
const CONSULTATION_ID = process.env.REACT_APP_CONSULTATION_ID;
const CONTACTS_ID = process.env.REACT_APP_CONTACTS_ID;
const FOOTER_ID = process.env.REACT_APP_FOOTER_ID;
const MODAL_ID = process.env.REACT_APP_MODAL_ID

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOCEN
});

function App() {

  const [modalActive, setModalActive] = useState(false);
  const [thanksModalShow, setThanksModalShow] = useState(false);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    client.getEntries()
      .then(response => {
        setEntries(response.items);
      })
      .catch(error => console.error('Помилка при отриманні записів:', error));
  }, []);
	return (
    <div className="App">
      <Circles />
      <Header tabs={ getEntriesById(entries, HEADER_ID) } />
      <Hero isModalOpen={setModalActive} entries={ getEntriesById(entries, HERO_ID) } />
      <AboutMe entries={ getEntriesById(entries, ABOUT_ME_ID) } />
      <Services entries={ getEntriesById(entries, SEVICES_ID) } />
      <Individual entries={ getEntriesById(entries, INDIVIDUAL_ID) } />
      <Prices isModalOpen={setModalActive} entries={ getEntriesById(entries, PRICES_ID) } />
      <Features entries={ getEntriesById(entries, FEATURES_ID) } />
      <Consultation isModalOpen={setModalActive} setThanksModalShow={setThanksModalShow} entries={ getEntriesById(entries, CONSULTATION_ID) } />
      <Contacts entries={ getEntriesById(entries, CONTACTS_ID) } />
      <Footer entries={ getEntriesById(entries, FOOTER_ID) } />
      <GoTopButton />
      <Modal active={ modalActive } setActive={ setModalActive }
        thanksModalShow={ thanksModalShow }
        setThanksModalShow={ setThanksModalShow }
        entries={ getEntriesById(entries, MODAL_ID) }/>
    </div>
  );
}

export default App;
