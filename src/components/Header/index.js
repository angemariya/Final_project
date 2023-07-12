import { NavLink } from "react-router-dom";
import styles from './Header.module.css';
import logo from '../../images/logo.svg';
import busket from '../../images/busket.svg';

export const Header = () => {

    return (
        <header>
            <div className={styles.headerMain}>
                <div className={styles.logoWrapper}>
                    <img className={styles.logo} src={logo} alt="#"></img>
                    <NavLink to={`/categories`} className={styles.grnButton}>Catalog</NavLink>
                </div>
                <nav className={styles.headerListWrapper}>
                    <ul className={styles.headerList}>
                        <li><NavLink to='/home'>Main Page</NavLink></li>
                        <li><NavLink to='/categories'>All Products</NavLink></li>
                        <li><NavLink to='/sale'>All Sale</NavLink></li>
                    </ul>
                    <NavLink to='/busket'><img src={busket}></img></NavLink>
                </nav>
            </div>
        </header>
    )
}