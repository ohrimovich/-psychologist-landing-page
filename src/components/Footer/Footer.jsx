import style from './footer.module.scss';
import Container from '../Container/Container';
import logo from '../../images/footer-logo.png';
import { ReactComponent as EnvelopIcon } from '../../images/icons/envelop-icon.svg';
import { ReactComponent as PhoneIcon } from '../../images/icons/phone-icon.svg';
import { ReactComponent as TelegramIcon } from '../../images/icons/telegram-icon.svg';
import { ReactComponent as ViberIcon } from '../../images/icons/viber-icon.svg';
import { ReactComponent as WhatsappIcon } from '../../images/icons/whatsapp-icon.svg';

const Footer = () => {

  const handleClickScroll = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
  
  return (
    <footer>
      <Container>
        <ul className={style.wrapper}>
          <li className={style.logo_wrapper}>
            <img className={style.logo} src={logo} alt="logo" />
            <p>Персональний сайт психолога Марії Янчук <br/>&#169; Всі права захищені 2022</p>
            <p>Політика конфіденційності</p>
          </li>
          <li className={style.menu}>
            <h3>Меню</h3>
            <span onClick={() => {handleClickScroll('about-me')}}>Про мене</span>
            <span onClick={() => {handleClickScroll('services')}}>Послуги</span>
            <span onClick={() => {handleClickScroll('prices')}}>Ціни</span>
          </li>
          <li className={style.work_time}>
            <h3>Час роботи</h3>
            <p>Пн-Пт: 10:00-19:00, Сб-Нд: вихідні</p>
            <div className={style.icons_wrapper}>
              <WhatsappIcon/>
              <ViberIcon/>
              <TelegramIcon/>
            </div>
          </li>
          <li className={style.contacts}>
            <h3>Контакти</h3>
            <p><EnvelopIcon/><a href="mailto:maria120631@gmail.com">maria120631@gmail.com</a></p>
            <p><PhoneIcon/><a href="tel:+380933564239">+38 (093) 35 642 39</a></p>
          </li>
        </ul>
      </Container>
    </footer>
  )
}

export default Footer;