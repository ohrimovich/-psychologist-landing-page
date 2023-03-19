import style from './prices.module.scss';
import Container from '../Container/Container';

const cards = [
  {
    title: 'Індивідуальні консультації',
    typeOfConsultation: 'Онлайн',
    price: '2 500 грн',
    quantityOfSessions: '3 сесії',
    durationOfSession: '50 хвилин / 1 сесія',
    descr: 'Для тих, хто цінує свій час та планує зустрічі заздалегідь',
    buttonText: 'Записатися'
  },
  {
    title: 'Індивідуальні консультації',
    typeOfConsultation: 'Онлайн',
    price: '1000 грн',
    quantityOfSessions: '1 сесії',
    durationOfSession: '50 хвилин',
    descr: 'Зручний спосіб отримати допомогу не зважаючи на ваше розташування',
    buttonText: 'Записатися'
  },
  {
    title: 'Індивідуальні консультації',
    typeOfConsultation: 'Онлайн',
    price: 'Безкоштовно',
    quantityOfSessions: '1 сесії',
    durationOfSession: 'Питання — Відповідь',
    descr: 'Опишіть вашу проблему та тримайте  швидку безкоштовну допомогу',
    buttonText: 'Записатися'
  },
]

const Prices = () => {
  return (
    <section className={style.prices} id='prices'>
      <Container>
      <h2 className={style.title}>Вартість послуг</h2>
      <ul className={style.cards_list}>
        {cards.map((card, id) => {
          return (
            <li key={id} className={style.card}>
              <h3>{ card.title}</h3>
              <p className={style.type}>{ card.typeOfConsultation}</p>
              <p className={style.price}>{ card.price}</p>
              <p className={style.quantity}>{ card.quantityOfSessions}</p>
              <p className={style.duration}>{ card.durationOfSession}</p>
              <p className={style.descr}>{ card.descr}</p>
              <button type='button'>{ card.buttonText}</button>
          </li>
          )
        })}
        </ul>
        </Container>
    </section>
  )
}

export default Prices;