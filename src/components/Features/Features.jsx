import style from './features.module.scss';
import Container from '../Container/Container';
import bg from '../../images/features-bg.png'

const features = [
  {
    image: require('../../images/privacy-icon.png'),
    title: 'Конфіденційність'
  },
  {
    image: require('../../images/empathy-icon.png'),
    title: 'Екологічні техніки'
  },
  {
    image: require('../../images/techniques-icon.png'),
    title: 'Емпатія'
  },
  {
    image: require('../../images/transanalysis-icon.png'),
    title: 'Транзактний аналіз (ОК-ейний метод)'
  }
]

const Features = () => {
  return (
    <section className={style.features}>
      <Container>
        <div className={style.wrapper}>
          <h2 className={style.title}>Особливості співпраці</h2>
          <ul className={style.features_list}>
            {features.map((feature, id) => {
            return (
              <li key={id} className={style.feature}>
                <img src={ feature.image} alt={ feature.title} />
                <p className={style.text}>{ feature.title}</p>
            </li>
            )
          })}
          </ul>
        </div>
        <img className={style.bg} src={bg} alt="features-bg" />
      </Container>
    </section>
  )
}

export default Features;