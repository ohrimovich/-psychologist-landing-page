import style from './prices.module.scss';
import Container from '../Container/Container';
import { pricesContent } from '../../config/content'
import { useEffect, useState } from 'react';

const Prices = ({ isModalOpen, entries }) => {

  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    entries ? setCards(entries.fields.items) : setCards(pricesContent.cards) 
  }, [])

  const handleClick = (e) => {
    if (e.target.getAttribute('data-modal')) {
      isModalOpen(true);
      return
    }
    handleScroll('consultation')
  }
  	const handleScroll = (id) => {
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
	}
  return (
    <section className={style.prices} id='prices'>
      <Container>
        <h2 className={style.title}>{ entries ? entries.fields.title : pricesContent.title }</h2>
      <ul className={style.cards_list}>
          { cards.map((card, id) => {
          return (
            <li key={id} className={style.card}>
              <h3>{ card.title}</h3>
              <p className={style.type}>{ card.typeOfConsultation}</p>
              <p className={style.price}>{ card.price}</p>
              <p className={style.quantity}>{ card.quantityOfSessions}</p>
              <p className={style.duration}>{ card.durationOfSession}</p>
              <p className={style.descr}>{ card.descr}</p>
              <button type='button' data-modal={card.shouldOpenModal} onClick={handleClick}>{ card.buttonText}</button>
          </li>
          )
        })}
        </ul>
        </Container>
    </section>
  )
}

export default Prices;