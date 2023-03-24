
import React, {useEffect, useState} from 'react';
import style from './goTopButton.module.scss';
import { ReactComponent as ArrowUpIcon } from '../../images/icons/arrowUp-icon.svg';

const GoTopButton = () => {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScrollButtonVisiblity = () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener('scroll', handleScrollButtonVisiblity);

    return () => { window.removeEventListener('scroll', handleScrollButtonVisiblity); };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <>
      {isVisible && (<button
        className={style.go_top_button}
        onClick={handleScrollToTop}
        type='button'><ArrowUpIcon/></button>)}
    </>
  )
}

export default GoTopButton;