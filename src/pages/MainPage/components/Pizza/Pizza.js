import React from 'react';
import styles from "./Pizza.module.css";
import {pizzaArray} from "../../../../constants";

const Pizza = () => {


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

        </>
    );

}
export default Pizza;