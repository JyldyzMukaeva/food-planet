import React from 'react';
import styles from "./Header.module.css";
import logo from "../../media/Icons/logo.svg";
import arrow from "../../media/Icons/arrow.svg";
import phone from "../../media/Icons/phone.svg";
import cart from "../../media/Icons/cart.svg";



const Header = () => {
    return (
        <>
        
        <div className={styles.header}>
            <img src={logo} alt=""/>
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="#">Меню<img src={arrow} alt=""/></a></li>
                <li><a href="#">Доставка</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#"><img src={phone} alt=""/>+996500405988</a></li>
                <li><a href="#"><img src={cart} alt=""/>1</a></li>
            </ul>
        </div>

         </>
    );
};

export default Header;