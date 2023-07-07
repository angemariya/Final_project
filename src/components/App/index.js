import styles from './App.module.css'
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';

export function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Outlet />
    </div>
  );
}

 