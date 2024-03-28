import style from './aboutMe.module.scss';
import about_me from '../../images/about-me-img.png'
import Container from '../Container/Container';
import { aboutMeContent } from '../../config/content'

const AboutMe = ({ entries }) => {
  return (
    <Container >
      <section id='about-me' className={ style.about_me }>
        <div className={ style.wrapper }>
          <img src={ about_me } alt="Марія в кріслі" />
          <div className={ style.content }>
            <h2 className={ style.title }>{ entries ? entries.fields.title : aboutMeContent.title }</h2>
            <p>{ entries ? entries.fields.paragraf1 : aboutMeContent.paragraf1 }</p>
            <p>{ entries ? entries.fields.paragraf2 : aboutMeContent.paragraf2 }</p>
            <p>{ entries ? entries.fields.paragraf3 : aboutMeContent.paragraf3 }</p> 
          </div>
        </div>
      </section>
    </Container>
  )
}

export default AboutMe;