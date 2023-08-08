import { useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';
import Arrow from '../images/up-arrow.png';
import styles from './App.module.css';

export function App() {
  const ref = useRef(null);
  const [openModal, setOpenModal] = useState(false);

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
      <button onClick={()=>setOpenModal(true)}>Open</button>
      <Modal open={openModal} onClose={()=>setOpenModal(false)}>Your phone number has been saved</Modal>
    </>
  );
}

 