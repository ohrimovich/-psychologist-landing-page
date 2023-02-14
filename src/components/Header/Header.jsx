import style from './header.module.scss';
import dark_logo from '../../images/header-logo.png';
import light_logo from '../../images/footer-logo.png';
import menu_icon from '../../images/icons/menu-icon.svg';
import close_icon from '../../images/icons/close-icon.svg'
import sprite from '../../images/symbol-defs.svg'
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
	},
	{
		link: '#consultation',
		value: 'Безкоштовна консультація',
	}
]


const Header = () => {

	const [isOpen, setIsOpen] = useState(false);

	return (
		<header>
			<div className={style.wrapper}>
				<a href="#"><img src={isOpen ? light_logo : dark_logo} alt="Logo" /></a>
				<nav className={isOpen ? style.active : ''}>
					<ul className={style.navigation}>
						{links.map(link => {
							return (
								<li><a href={link.link}>{link.value}</a></li>
							)
						})}
					</ul>
				</nav>
				<button type='button' onClick={() => setIsOpen(!isOpen)} className={style.menu_btn} style={isOpen ? { backgroundImage: close_icon } : { backgroudImage: `${menu_icon}` }}>
				</button>


			</div>

		</header >
	);
};

export default Header;
