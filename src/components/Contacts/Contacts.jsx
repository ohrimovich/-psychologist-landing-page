import style from './contacts.module.scss';
import Container from '../Container/Container';
import MariaWithClock from '../../images/Maria-with-clock.png'
import { ReactComponent as ClockIcon } from '../../images/icons/clock-icon.svg';
import { ReactComponent as EnvelopIcon } from '../../images/icons/envelop-icon.svg';
import { ReactComponent as PhoneIcon } from '../../images/icons/phone-icon.svg';



const Contacts = () => {
  return (
    <section id='contacts' className={style.contacts}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.content}>
            <img src={MariaWithClock} alt="Психолог Марія" />
            <div className={style.content_wrapper}>
              <h2 className={style.title}>Контакти</h2>
              <p>Буду рада бачити Вас на консультаціях Я на зв'язку у будні дні з 10 до 19 години </p>
              <h3 className={style.subtitle}>Графік роботи</h3>
              <ul>
                <li><ClockIcon className={ style.icon} />Пн-Пт: 10:00-19:00, Сб-Нд: вихідні</li>
                <li><EnvelopIcon className={ style.icon}/><a href="mailto:info@mariiayanchuk.com.ua">info@mariiayanchuk.com.ua</a></li>
                <li><PhoneIcon className={ style.icon}/><a href="tel:+380976945250">+38 (097) 69 452 50</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contacts;