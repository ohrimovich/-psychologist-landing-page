import style from './features.module.scss';
import Container from '../Container/Container';
import bg from '../../images/bg_ellipse.png'
import { featuresContent } from '../../config/content'

const Features = ({ entries }) => {
  return (
    <section className={ style.features }>
      <Container>
        <div className={ style.wrapper }>
          <h2 className={ style.title }>{ entries ? entries.fields.title : featuresContent.title }</h2>
          <ul className={ style.features_list }>
            {featuresContent.features.map((feature, index) => {
            return (
              <li key={ index } className={ style.feature }>
                <img src={ feature.image } alt={ feature.title } />
                <p className={ style.text }>{ entries ? entries.fields.items[index] : feature.title }</p>
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