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
              <input placeholder="Ваше ім'я" type="text" name='name' />
            </label>  
            <label>
              <input placeholder="Телефон" type="tel" name='phone-number' />
            </label>  
            <label>
              <textarea placeholder="Опишіть вашу проблему" name='question' rows="5"cols="60"></textarea>
            </label>
            <button>Відправити</button>
         </form>
        </div>
      </Container>
    </section>
  )
}

export default Consultation;