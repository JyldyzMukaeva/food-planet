import React from 'react';
import styles from "./Menu.module.css";
import {pizzaArray} from "../../../../constants";


const Menu = () => {

    const pizza = pizzaArray.map(item => (

            <div className={styles.pizzaBox}>

                <img src={item.image} alt=""/>
                <h1>{item.name}</h1>
                <p>{item.text}</p>
                <p>{item.price}<span>сом</span></p>
                <div className={styles.btn1}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
                <div className={styles.btn2}>
                    <button>В КОРЗИНУ</button>
                </div>

            </div>



        )
    );




    return (
        <>
            <div className={styles.container}>
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


            <div className={styles.choose}>
                <span>Сортировать по:</span>
                <select name="" id="">
                    <option>По умолчанию</option>
                    {/*<img src={} alt=""/>*/}
                    <option value="Мексиканская">Мексиканская</option>
                    <option value="Мексиканская">Мексиканская</option>
                    <option value="Мексиканская">Мексиканская</option>
                </select>
            </div>
            <div className={styles.pizza}>
                {pizza}
            </div>
            <div className={styles.btn3}>
                <button>ПОКАЗАТЬ ЕЩЕ</button>
            </div>
            </div>
        </>

    );
};

export default Menu;