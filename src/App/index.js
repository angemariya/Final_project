import { useState, useRef, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';
import Arrow from '../images/up-arrow.png';
import styles from './App.module.css';

export function App() {
  const ref = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const isScrolledDown = window.scrollY > 100;
    setShowScrollButton(isScrolledDown);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div ref={ref}>
        <Outlet context={[openModal, setOpenModal]}/>
      </div>
      <Footer />
      {showScrollButton && (
        <a className={styles.button} onClick={scrollToTop}>
          <img src={Arrow} alt="arrow up" />
        </a>
      )}
      <Modal open={openModal} onClose={()=>setOpenModal(false)} >You get your discount code with a message</Modal>
    </>
  );
}

 