import { useEffect, useState } from 'react';
import style from './individual.module.scss';
import Container from '../Container/Container';
import Maria_desktop from '../../images/Maria-desktop.png';
import Maria_mobile from '../../images/Maria-mobile.png';
import { individualContent } from '../../config/content'

const Individual = ({ entries }) => {

  const [windowWidth, setWindowWidth] = useState([window.innerWidth]);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleWindowResize);
		
		 return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth])
  return (
    <section className={style.individual}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.content}>
            <h2>{entries ? entries.fields.title : individualContent.title }</h2>
            <p>{entries ? entries.fields.description : individualContent.description }</p>
          </div>
          <div  className={style.image_wrapper}>
             <img
             src={windowWidth <= 705 ? Maria_mobile : Maria_desktop }
             alt="Психолог Марія Янчук"
           />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Individual;