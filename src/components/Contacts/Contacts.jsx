import style from './contacts.module.scss';
import Container from '../Container/Container';
import MariaWithClock from '../../images/Maria-with-clock.png'
import { ReactComponent as ClockIcon } from '../../images/icons/clock-icon.svg';
import { ReactComponent as EnvelopIcon } from '../../images/icons/envelop-icon.svg';
import { ReactComponent as PhoneIcon } from '../../images/icons/phone-icon.svg';
import { contactsContent } from '../../config/content'

const Contacts = ({ entries }) => {
  return (
    <section id='contacts' className={style.contacts}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.content}>
            <img src={MariaWithClock} alt="Психолог Марія" />
            <div className={style.content_wrapper}>
              <h2 className={style.title}>{ entries ? entries.fields.title : contactsContent.title }</h2>
              <p>{ contactsContent.description }</p>
              <h3 className={style.subtitle}>{entries ? entries.fields.subtitle : contactsContent.subtitle }</h3>
              <ul>
                <li><ClockIcon className={style.icon} />{entries ? entries.fields.workTime : contactsContent.workTime }</li>
                <li><EnvelopIcon className={style.icon} /><a href={`mailto:maria120631@gmail.com`}>{ entries ? entries.fields.email : contactsContent.email }</a></li>
                <li><PhoneIcon className={style.icon} /><a href="tel:+380976945250">{entries ? entries.fields.phoneNumber : contactsContent.phoneNumber }</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contacts;