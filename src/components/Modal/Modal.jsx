import style from './modal.module.scss'
import { ReactComponent as CloseIcon } from '../../images/icons/close-icon.svg';
import { ReactComponent as PhoneIcon } from '../../images/icons/phone-icon.svg';
import { ReactComponent as OkIcon } from '../../images/icons/ok-icon.svg';

const Modal = ({active, setActive}) => {

  return (
    <div className={style.overlay} style={active ? { pointerEvents: 'all', opacity: '1'} : {}} onClick={() => setActive(false)}>
      <div className={style.modal} onClick={e => e.stopPropagation() }>
        <h2>Записятися на консультацію</h2>
        <p className={style.text}>Не любите чекати? Телефонуйте мені:</p>
        <p className={style.tel}><PhoneIcon/><a href="tel:+380933564239">+38 (093) 35 642 39</a></p>
        <CloseIcon className={style.close_icon } onClick={() => setActive(false)} />
        <form>
          <label>
            <input type="text" placeholder="Ваше ім'я" required minLength='1' pattern='^[А-Яа-я]+$' />
            <p className={style.error_message}>Вкажіть ваше ім'я</p>
          </label>
          <label>
            <input type="tel" placeholder="Телефон" required pattern='^((0|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,11}$' />
            <p className={style.error_message}>Вкажіть ваш номер телефону</p>
          </label>
          <button className={style.modal_button}>Залишити заявку</button>
        </form>
          <p className={style.policy}>Натискаючи на кнопку, Ви даєте згоду на обробку персональних даних та погоджуєтесь з <span>Політикою конфіденційності.</span></p>
      </div>
      <div className={style.thanks_modal} onClick={e => e.stopPropagation() }>
        <CloseIcon className={style.close_icon } onClick={() => setActive(false)} />
       <div className={style.icon_wrapper}><OkIcon/></div> 
        <h2>Дякую</h2>
        <p>Ваша заявка успішно подана</p>
        <button className={style.modal_button} type='button' onClick={() => setActive(false)}>На Головну</button>
      </div>
    </div>
  )
}
export default Modal;