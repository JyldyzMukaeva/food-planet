import React from 'react';
import styles from "./Burgers.module.css"
import {burgersArray} from "../../../constants";



const Burgers = () => {


        const burgers = burgersArray.map(item => (
            <div className={styles.burgerBox}>
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
    <div className={styles.burgers}>
        {burgers}
    </div>
);
}
export default Burgers;

