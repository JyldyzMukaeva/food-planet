import React from 'react';
import styles from "./Main.module.css";
import burger from "../../media/Images/burger.jpg";
import arrow2 from "../../media/Icons/arrow2.svg"

const Main = () => {
    return (
        <>
        <div className={styles.main}>

        <div>
            <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
            <p>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
            <button>Перейти в меню <img src={arrow2} alt=""/></button>
        </div>

        <div>
             <img src={burger} alt=""/>
         </div>

        </div>

        </>
    );
};

export default Main;