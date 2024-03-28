import { useEffect } from 'react';
import axios from 'axios';
import style from './modal.module.scss';
import { ReactComponent as CloseIcon } from '../../images/icons/close-icon.svg';
import { ReactComponent as PhoneIcon } from '../../images/icons/phone-icon.svg';
import { ReactComponent as OkIcon } from '../../images/icons/ok-icon.svg';
import { modalContent } from '../../config/content'

const Modal = ({ active, setActive, setThanksModalShow, thanksModalShow, entries }) => {
  
  useEffect(() => {
    const TOKEN = process.env.REACT_APP_TOKEN;
    const CHAT_ID = process.env.REACT_APP_CHAT_ID;
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
    const form = document.getElementById('modal-form');
   
    function submitHandler(e) {
      e.preventDefault();

      let message = `<b>Заявка на індивідуальну консультацію</b>\n`;
      message += `<b>Відправник: </b>${this.name.value}\n`
      message += `<b>Номер телефону: </b>${this.phone.value}\n`

      axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
      })
        .then((res) => {
          this.name.value = '';
          this.phone.value = '';
          setThanksModalShow(true);
      })
        .catch((err) => {
        console.warn(err)
      })
    }

     form.addEventListener('submit', submitHandler);
     return () => {form.removeEventListener('submit', submitHandler)}
   })
  
   const closingModal = () => {
    setActive(false);
    setThanksModalShow(false);
  }
  return (
    <div className={style.overlay} style={active ? { pointerEvents: 'all', opacity: '1' } : {}} onClick={closingModal}>
      <div className={style.modal} onClick={e => e.stopPropagation() } style={active ? {opacity: '1'} : {opacity: '0'} }>
        <h2>{entries ? entries.fields.title : modalContent.title }</h2>
        <p className={style.text}>{ entries ? entries.fields.description : modalContent.description }</p>
        <p className={style.tel}><PhoneIcon /><a href="tel:+380976945250">{ entries ? entries.fields.phoneNumber : modalContent.phoneNumber }</a></p>
        <CloseIcon className={style.close_icon } onClick={() => setActive(false)} />
        <form id='modal-form'>
          <label>
            <input type="text" name='name' placeholder={ entries ? entries.fields.fieldName : modalContent.fieldName } required minLength='1' pattern="^[А-Яа-яЁёЇїІіЄєҐґ']+$" />
            <p className={style.error_message}>{ entries ? entries.fields.fieldNameError : modalContent.fieldNameError }</p>
          </label>
          <label>
            <input type="tel" placeholder={ entries ? entries.fields.fieldPhone : modalContent.fieldPhone } name='phone' required pattern='^((0|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,11}$' />
            <p className={style.error_message}>{ entries ? entries.fields.fieldPhoneError : modalContent.fieldPhoneError }</p>
          </label>
          <button className={style.modal_button}>{ entries ? entries.fields.buttonText : modalContent.buttonText }</button>
        </form>
        <p className={ style.policy }>{ entries ? entries.fields.privacyPolicy : modalContent.privacyPolicy }<span>Політикою конфіденційності.</span></p>
      </div>
      <div className={ style.thanks_modal } style={ thanksModalShow ? {zIndex: '4'} : {zIndex: '3'} } onClick={e => e.stopPropagation() }>
        <CloseIcon className={style.close_icon} onClick={closingModal} />
       <div className={style.icon_wrapper}><OkIcon/></div> 
        <h2>{ entries ? entries.fields.thankYouTitle : modalContent.thankYouTitle }</h2>
        <p>{ entries ? entries.fields.thankYouText : modalContent.thankYouText }</p>
        <button className={style.modal_button} type='button' onClick={closingModal}>{ entries ? entries.fields.thankYouButton : modalContent.thankYouButton }</button>
      </div>
    </div>
  )
}
export default Modal;