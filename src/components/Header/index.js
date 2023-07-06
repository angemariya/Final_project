import { NavLink } from "react-router-dom";
import styles from './Header.module.css';
import logo from '../../images/logo.svg';
import busket from '../../images/busket.svg';

export const Header = () => {

    return (
        <header className={styles.headerMain}>
            <div className={styles.logoWrapper}>
                <img className={styles.logo} src={logo} alt="#"></img>
                <button className={styles.grnButton}>Catalog</button>
            </div>
            <div className={styles.headerListWrapper}>
             <ul className={styles.headerList}>
                <li><NavLink to='/main'>Main Page</NavLink></li>
                <li><NavLink to='/all'>All Products</NavLink></li>
                <li><NavLink to='/sale'>All Sale</NavLink></li>
            </ul>
            <NavLink to='/busket'><img src={busket}></img></NavLink>    
            </div>


        </header>
    )
}