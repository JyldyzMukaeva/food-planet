import React from 'react';
import styles from "../Menu/Menu.module.css";

const Menu = () => {
    return (

        <>

            <div className={styles.menu}>

                <ul>
                    <li><a href="/">Меню</a></li>
                    <li><a href="#">Пицца</a></li>
                    <li><a href="#">Бургер</a></li>
                    <li><a href="#">Суши</a></li>
                    <li><a href="#">Роллы</a></li>
                    <li><a href="#">Салаты</a></li>
                    <li><a href="#">Десерты</a></li>
                    <li><a href="#">Напитки</a></li>
                </ul>

            </div>

        </>

    );
};

export default Menu;