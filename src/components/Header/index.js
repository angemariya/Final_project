import { NavLink } from "react-router-dom"
import styles from './Header.module.css'

export const Header = () => {

    return (
        <header className={styles.headerMain}>
            <a href="#">
                <img src="" alt="#"></img>
            </a>
            <ul className={styles.headerList}>
                <li><NavLink to='/catalogs'>Catalogs</NavLink></li>
                <li><NavLink to='/coupon'>Coupon</NavLink></li>
                <li><NavLink to='/sale'>Sale</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </header>
    )
}