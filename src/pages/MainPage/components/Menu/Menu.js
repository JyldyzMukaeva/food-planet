import React from 'react';
import styles from "./Menu.module.css";

const Menu = () => {
    return (

        <div className={styles.menu}>
            <h3>Меню</h3>
            <p className={styles.span}><a href="#">Пицца</a></p>
            <p><a href="#">Бургер</a></p>
            <p><a href="#">Суши</a></p>
            <p><a href="#">Роллы</a></p>
            <p><a href="#">Салаты</a></p>
            <p><a href="#">Десерты</a></p>
            <p><a href="#">Напитки</a></p>
        </div>

    );
};

export default Menu;