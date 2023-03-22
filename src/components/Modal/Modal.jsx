import style from './modal.module.scss'
import { ReactComponent as CloseIcon } from '../../images/icons/close-icon.svg';
import { ReactComponent as PhoneIcon } from '../../images/icons/phone-icon.svg';

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
            <input type="text" placeholder="Ваше ім'я"></input>
          </label>
          <label>
            <input type="tel" placeholder="Телефон"></input>
          </label>
          <button>Залишити заявку</button>
        </form>
          <p className={style.policy}>Натискаючи на кнопку, Ви даєте згоду на обробку персональних даних та погоджуєтесь з <span>Політикою конфіденційності.</span></p>
      </div>
    </div>
  )
}
export default Modal;