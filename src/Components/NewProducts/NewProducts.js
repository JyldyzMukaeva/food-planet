import React from 'react';
import styles from "./NewProducts.module.css";


const NewProducts = () => {
    return (

            <>

                <div className={styles.newProducts}>

                    <ul>
                        <li><a href="/">Новинки</a></li>
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

export default NewProducts;