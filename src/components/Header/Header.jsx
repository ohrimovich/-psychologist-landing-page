import style from './header.module.scss';
import { ReactComponent as DarkLogo } from '../../images/header-logo.svg';
import { ReactComponent as LightLogo } from '../../images/footer-logo.svg';
import { ReactComponent as MenuIcon } from '../../images/icons/menu-icon.svg';
import { ReactComponent as CloseIcon } from '../../images/icons/close-icon.svg';
import { useEffect, useState } from 'react';
import Container from '../Container/Container';
import { headerContent } from '../../config/content'

const Header = ({ tabs }) => {

	const [isOpen, setIsOpen] = useState(false);
	const [windowWidth, setWindowWidth] = useState([window.innerWidth]);
	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleWindowResize);
		
		if (windowWidth <= 768) {
				isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
		} else {
			setIsOpen(false);
		}
		 return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
	},[windowWidth, isOpen])
	const handleClickScroll = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
	return (
		<header>
			<Container>
				<div className={ style.wrapper }>
					<a href="/">{ isOpen ? <LightLogo/> : <DarkLogo/>}</a>
					<nav className={ isOpen ? style.active : null }>
						<ul className={ style.nav_list }>
							{ headerContent.headerTabs.map((tab, index) => {
								return (
									<li key={ tab.id } className={ style.nav_item }>
										<button
											className={ style.nav_link }
											onClick={ () => {
												setIsOpen(!isOpen)
												handleClickScroll(tab.id)
											} }>
											{ tabs ? tabs.fields.tabs[index] : tab.value }</button></li>
								)
							})}
							<li className={ style.nav_item }> <button href='' className={ style.consultation }
								onClick={ () => {
									setIsOpen(!isOpen)
									handleClickScroll('consultation')
								}}>{tabs ? tabs.fields.tabs[4] : headerContent.buttonText }</button></li>
						</ul>
					</nav>
					<div className={ style.tablet_buttons }>
						{ isOpen ? null : <button className={ style.consultation }
							onClick={ () => { handleClickScroll('consultation') } }>
							{ tabs ? tabs.fields.tabs[4] : headerContent.buttonText }</button> }
						<button onClick={ () => setIsOpen(!isOpen) } className={ style.menu_btn }>
							{ isOpen ? <CloseIcon className={ style.close_icon } /> : <MenuIcon /> }
						</button>
					</div>
				</div>
			</Container>
		</header >
	);
};

export default Header;
