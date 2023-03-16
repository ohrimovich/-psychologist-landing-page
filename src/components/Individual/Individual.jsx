import style from './individual.module.scss'
import Container from '../Container/Container';
import Maria_desktop from '../../images/Maria-desktop.png'
import Maria_mobile from '../../images/Maria-mobile.png'

const Individual = () => {
  return (
    <section className={style.individual}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.content}>
            <h2>Індивідуальна консультація</h2>
            <p>Індивідуальна консультація це можливість отримати час тільки для себе, де фокус психолога спрямований на клієнта, погляд всередину внутрішнього світу людини. Кожен в процесі консультації може бути тут і тепер, собою, таким яким він є.</p>
          </div>
          <div  className={style.image_wrapper}>
             <img
             src={Maria_mobile}
             srcSet={`${Maria_mobile} 768w, ${Maria_desktop} 1280w, `}
             alt="Психолог Марія Янчук"
           />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Individual;