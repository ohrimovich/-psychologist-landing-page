import style from './consultation.module.scss';
import Container from '../Container/Container';
import consultationImg from '../../images/consultation-img.png';


const Consultation = () => {
  return (
    <section id='consultation' className={style.consultation}>
      <Container>
        <h2 className={style.title}>
          <span>Безкоштовна</span> консультація в месенджері
        </h2>
        <div className={style.wrapper}>
          <div className={style.img_wpapper}>
            <img src={consultationImg} alt="man With Laptop" />
          </div>
          <form>
            <p>Опишіть ваше питання чи проблему і я зв'яжусь з вами</p>
            <label>
              <input placeholder="Ваше ім'я" required minLength='1' pattern='^[А-Яа-я]+$' type="text" name='name' />
              <p className={style.error_message}>Вкажіть ваше ім'я</p>
            </label>
            <label>
              <input placeholder="Телефон" type="tel" required pattern='^((0|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,11}$' name='phone-number' />
              <p className={style.error_message}>Вкажіть ваш номер телефону</p>
            </label>
            <label>
              <textarea placeholder="Опишіть вашу проблему" required minLength='2' name='question' rows="5" cols="60"></textarea>
              <p className={style.error_message}>Опишіть вашу проблему</p>
            </label>
            
            <button>Відправити</button>
         </form>
        </div>
      </Container>
    </section>
  )
}

export default Consultation;