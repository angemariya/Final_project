import styles from './App.module.css'
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../Footer';

export function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

 