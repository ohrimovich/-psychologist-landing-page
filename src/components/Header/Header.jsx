import style from './header.module.scss';
import dark_logo from '../../images/header-logo.png';
import light_logo from '../../images/footer-logo.png';
import { ReactComponent as MenuIcon } from '../../images/icons/menu-icon.svg';
import { ReactComponent as CloseIcon } from '../../images/icons/close-icon.svg'
import Container from '../Container/Container';

import { useState } from 'react';

const links = [
	{
		link: '#about-me',
		value: 'Про мене',
	},
	{
		link: '#services',
		value: 'Послуги',
	},
	{
		link: '#prices',
		value: 'Ціни',
	},
	{
		link: '#contacts',
		value: 'Контакти',
	}
]


const Header = () => {

	const [isOpen, setIsOpen] = useState(false);

	return (

		<header>
			<Container>
				<div className={style.wrapper}>
					<a href="/"><img src={isOpen ? light_logo : dark_logo} alt="Logo" /></a>
					<nav className={isOpen ? style.active : null}>
						<ul className={style.nav_list}>
							{links.map(link => {
								return (
									<li key={link.link} className={style.nav_item}><a className={style.nav_link} href={link.link}>{link.value}</a></li>
								)
							})}
							<li className={style.nav_item}> <a className={style.consultation} href="#consultation">Безкоштовна консультація</a></li>
						</ul>
					</nav>
					<div className={style.tablet_buttons}>
						{isOpen ? null : <a href='#consultation' className={style.consultation}>Безкоштовна консультація</a>}
						<button type='button' onClick={() => setIsOpen(!isOpen)} className={style.menu_btn}>
							{isOpen ? <CloseIcon /> : <MenuIcon />}
						</button>
					</div>
				</div>
			</Container>
		</header >


	);
};

export default Header;
