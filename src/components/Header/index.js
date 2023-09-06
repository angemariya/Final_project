import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { BurgerMenu } from "../BurgerMenu";
import styles from './Header.module.css';
import logo from '../../images/logo.svg';
import busket from '../../images/busket.svg';

export const Header = () => {

    const productsInBusket = useSelector(state => state.basket.products.length);

    return (
        <header>
            <div className={styles.headerMain}>
                <BurgerMenu />
                <div className={styles.logoWrapper}>
                    <img className={styles.logo} src={logo} alt="Logo"></img>
                    <NavLink to={'/categories'} className={styles.grnButton}>Catalog</NavLink>
                </div>
                <nav className={styles.headerListWrapper}>
                    <ul className={styles.headerList}>
                        <li><NavLink to='/home' className={({ isActive }) => isActive ? styles.active : ""} >Main Page</NavLink></li>
                        <li><NavLink to='/products/all' className={({ isActive }) => isActive ? styles.active : ""}>All Products</NavLink></li>
                        <li><NavLink to='/sale' className={({ isActive }) => isActive ? styles.active : ""}>All Sale</NavLink></li>
                    </ul>
                    <NavLink className={styles.busket} to='/basket'>
                        <img src={busket} alt="busket" />
                        <span className={styles.counter}>{productsInBusket}</span></NavLink> 
                </nav>
            </div>
        </header>
    )
}