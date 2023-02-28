import style from './individual.module.scss'
import Container from '../Container/Container';

const Individual = () => {
  return (
    <section className={style.individual}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.content}>
            <h2>Індивідуальна консультація</h2>
            <p>Індивідуальна консультація це можливість отримати час тільки для себе, де фокус психолога спрямований на клієнта, погляд всередину внутрішнього світу людини. Кожен в процесі консультації може бути тут і тепер, собою, таким яким він є.</p>
          </div>
          <img src={require('../../images/Maria.png')} alt="Марія" />
        </div>
      </Container>
    </section>
  )
}

export default Individual;