import style from './hero.module.scss'
import hero_img from '../../images/hero_img.png'
import Container from '../Container/Container';
import { heroContent } from '../../config/content'

const Hero = ({ isModalOpen, entries }) => {

  return (
    <section className={ style.hero }>
      <Container>
        <div className={ style.hero_wrapper }>
          <div className={ style.hero_content }>
            <p className={style.hero_text}>{ entries ? entries.fields.lid : heroContent.lid }</p>
            <h1 className={style.hero_title}>{ entries ? entries.fields.title : heroContent.title }</h1>
            <p className={style.hero_text__colored}>{ entries ? entries.fields.description : heroContent.description }</p>
            <button type='button' className={ style.hero_button} onClick={() => isModalOpen(true)}>{entries ? entries.fields.button : heroContent.buttonText }</button>
          </div>
          <div className={ style.hero_img } >
            <img src={ hero_img } alt="Марія Янчук з телефоном" />
          </div>
        </div>
      </Container>
    </section>
  )

}

export default Hero;