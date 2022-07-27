import React from 'react';
import styles from "../Footer/Footer.module.css";
import logo1 from "../../media/Icons/logo1.svg";
import phone1 from "../../media/Icons/phone1.svg";


const Footer = () => {
    return (
        <div>
            <>

                <div className={styles.footer}>
                    <img className={styles.logo1} src={logo1} alt=""/>
                    <ul>

                        <li><a href="/">Главная</a></li>
                        <li><a href="#">Меню</a></li>
                        <li><a href="#">Доставка</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#"><img src={phone1} alt=""/>+996500405988</a></li>

                    </ul>
                </div>

            </>
        </div>
    );
};

export default Footer;