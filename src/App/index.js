import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Arrow from '../images/up-arrow.png'
import styles from './App.module.css'

export function App() {
  const ref = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <div ref={ref}>
        <Outlet />
      </div>
      <Footer />
      <a className={styles.button} onClick={scrollToTop}> 
        <img src={Arrow} alt="arrow up"/> 
      </a>
      
    </>
  );
}

 