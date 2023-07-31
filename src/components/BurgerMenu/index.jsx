import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

export const BurgerMenu = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div className="wrapper">
            <nav className="nav">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
                <ul className="menu-list">
                    <li><NavLink to='/home' >Main Page</NavLink></li>
                    <li><NavLink to='/products/all'>All Products</NavLink></li>
                    <li><NavLink to='/sale'>All Sale</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
