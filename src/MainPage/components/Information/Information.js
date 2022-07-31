import React from 'react';
import {informationArray} from "../../../constants";
import styles from "./Information.module.css";

const Information = () => {



    const information = informationArray.map(item => (

            <div className={styles.informationBox}>
                <img src={item.image} alt=""/>
                <h1>{item.name}</h1>
                <p>{item.text}</p>
            </div>
        )
    );
    return (

        <div className={styles.information}>
            <div>
                <h1>Почему выбирают нас:</h1>
            </div>
            {information}
        </div>
    );
}
export default Information;
