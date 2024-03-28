import style from './services.module.scss';
import Container from '../Container/Container';
import { servicesContent } from '../../config/content'



const Sevices = ({ entries }) => {
  return (
    <section id='services' className={ style.services }>
      <Container>
        <h2 className={style.services_title}>{entries ? entries.fields.title : servicesContent.title }</h2>
        <ul className={ style.services_list }>
          { servicesContent.servicesList.map((item, index) => {
            return (
              <li key={ item.alt } className={ style.services_item }><img src={ item.imgPath } alt={ item.alt } /><p>{ entries ? entries.fields.items[index] : item.text }</p></li>
            )
          }) }
        </ul>
      </Container>
    </section>
  )
}

export default Sevices;