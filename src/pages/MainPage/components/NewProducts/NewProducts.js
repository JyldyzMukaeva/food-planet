import React from 'react';
import styles from "./NewProducts.module.css";


const NewProducts = () => {
    return (

            <>

                <div className={styles.newProducts}>
                    <div className={styles.new1}>
                    <span><a href="/">Новинки</a></span>
                    </div>
                    <div className={styles.new2}>
                    <ul>
                        <li><a href="#">Пицца</a></li>
                        <li><a href="#">Бургер</a></li>
                        <li><a href="#">Суши</a></li>
                        <li><a href="#">Роллы</a></li>
                        <li><a href="#">Салаты</a></li>
                        <li><a href="#">Десерты</a></li>
                        <li><a href="#">Напитки</a></li>
                    </ul>
                    </div>
                </div>

            </>

    );
};

export default NewProducts;