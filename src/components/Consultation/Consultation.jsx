import style from './consultation.module.scss';
import Container from '../Container/Container';
import consultationImg from '../../images/consultation-img.png';
import { useEffect } from 'react';
import axios from 'axios';


const Consultation = ({ isModalOpen, setThanksModalShow }) => {
  
  const showingThanksModal = () => {
      setThanksModalShow(true);
      isModalOpen(true);
  }

  useEffect(() => {

    const TOKEN = process.env.REACT_APP_TOKEN;
    const CHAT_ID = process.env.REACT_APP_CHAT_ID;
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
    const form = document.getElementById('form');
    function submitHandler(e) {
       e.preventDefault();
     
      let message = `<b>Заявка з сайту</b>\n`;
      message += `<b>Відправник: </b>${this.name.value}\n`
      message += `<b>Номер телефону: </b>${this.phone.value}\n`
      message += `<b>Запитання: </b>${this.question.value}`
      
      axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    })
      .then((res) => {
        this.name.value = '';
        this.phone.value = '';
        this.question.value = '';
        showingThanksModal();
    })
      .catch((err) => {
      console.warn(err)
    })
  }
    form.addEventListener('submit', submitHandler);
    
    return () => {form.removeEventListener('submit', submitHandler)}
  })
  
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
          <form id='form'>
            <p>Опишіть ваше питання чи проблему і я зв'яжусь з вами</p>
            <label>
              <input placeholder="Ваше ім'я" required minLength='1' pattern='^[А-Яа-я]+$' type="text" name='name' />
              <p className={style.error_message}>Вкажіть ваше ім'я</p>
            </label>
            <label>
              <input placeholder="Телефон" type="tel" required pattern='^((0|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,11}$' name='phone' />
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