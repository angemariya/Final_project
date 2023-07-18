import React, { useState, useEffect } from 'react'
import styles from './ArrowToTop.module.css'

export const ArrowToTop = () => {
const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 1500) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);

const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};

  return (
    <div className={s.container} onClick={()=>goToTop()}>
      {showTopBtn && (
      <button className={styles.scroll_btn}>
        <span className='material-icons'>keyboard_arrow_up</span>
      </button>)}
    </div>
    
  )
}