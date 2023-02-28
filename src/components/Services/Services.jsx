import style from './services.module.scss';
import Container from '../Container/Container';


const Sevices = () => {

  const servicesList = [
    {
      text: 'Пошук себе',
      alt: 'Дівчина в дзеркалі',
      imgPath: require('../../images/girl-in-mirror.png')
    },
    {
      text: 'Проблеми у відносинах',
      alt: 'Пара',
      imgPath: require('../../images/couple.png')
    },
    {
      text: 'Складнощі із прийняттям рішень',
      alt: 'Вибір',
      imgPath: require('../../images/apple&donut.png')
    },
    {
      text: 'Невпевненість в собі',
      alt: 'Дівчина в светрі',
      imgPath: require('../../images/girl-sweater.png')
    },
    {
      text: 'Допомога в кризових ситуаціях',
      alt: 'Сумна дівчина',
      imgPath: require('../../images/sad-girl.png')
    },
    {
      text: 'Пошук сенсів',
      alt: 'Жінка',
      imgPath: require('../../images/woman&oldman.png')
    },
    {
      text: 'Пошук внутрішніх опор',
      alt: 'медитуюча дівчина',
      imgPath: require('../../images/meditating-girl.png')
    },
    {
      text: 'Тревога, страхи, переживання',
      alt: 'чоловік в окулярах',
      imgPath: require('../../images/man-in-glasses.png')
    }
  ]
  return (
    <section id='services' className={style.services}>
      <Container>
        <h2 className={style.services_title}>Ситуації з якими я можу Вам допомогти</h2>
        <ul className={style.services_list}>
          {servicesList.map(item => {
            return (
              <li className={style.services_item}><img src={item.imgPath} alt={item.alt} /><p>{item.text}</p></li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

export default Sevices;