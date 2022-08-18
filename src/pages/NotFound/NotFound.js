import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./NotFound.module.css";
import notfound from "../../media/Images/notfound.png";

const NotFound = () => {
    return (

            <div className={styles.container}>
                <span>4<img src={notfound} alt=""/>4</span>
            <p>Ошибка. Страница не найдена.</p>
            <NavLink to="/">
                <button className={styles.btn}>Вернуться на главную страницу</button>
            </NavLink>
            </div>


    );
};

export default NotFound;