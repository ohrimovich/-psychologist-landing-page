import style from './footer.module.scss';
import Container from '../Container/Container';
import { ReactComponent as LightLogo } from '../../images/footer-logo.svg';
import { ReactComponent as EnvelopIcon } from '../../images/icons/envelop-icon.svg';
import { ReactComponent as PhoneIcon } from '../../images/icons/phone-icon.svg';
import { footerContent } from '../../config/content'

const Footer = ({ entries }) => {

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
            <LightLogo className={style.logo } />
            <p>{ entries ? entries.fields.text1 : footerContent.text1 }</p>
            <p>{ entries ? entries.fields.text2 : footerContent.text2 }</p>
            <p>{ entries ? entries.fields.text3 : footerContent.text3 }</p>
          </li>
          <li className={style.menu}>
            <h3>{ entries ? entries.fields.subtitle1 : footerContent.subtitle1 }</h3>
            <span onClick={() => { handleClickScroll('about-me') }}>{ entries ? entries.fields.item1 : footerContent.item1 }</span>
            <span onClick={() => { handleClickScroll('services') }}>{ entries ? entries.fields.item2 : footerContent.item2 }</span>
            <span onClick={() => { handleClickScroll('prices') }}>{ entries ? entries.fields.item3 : footerContent.item3 }</span>
          </li>
          <li className={style.work_time}>
            <h3>{ entries ? entries.fields.subtitle2 : footerContent.subtitle2 }</h3>
            <p>{ entries ? entries.fields.workTime : footerContent.workTime }</p>
          </li>
          <li className={style.contacts}>
            <h3>{ entries ? entries.fields.subtitle3 : footerContent.subtitle3 }</h3>
            <p><EnvelopIcon /><a href={`mailto:maria120631@gmail.com`}>{ entries ? entries.fields.email : footerContent.email }</a></p>
            <p><PhoneIcon /><a href="tel:+380933564239">{ entries ? entries.fields.phoneNumber : footerContent.phoneNumber }</a></p>
          </li>
        </ul>
      </Container>
    </footer>
  )
}

export default Footer;