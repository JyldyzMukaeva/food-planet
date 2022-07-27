import React from 'react';
import styles from "./Burgers.module.css"
import burger1 from  "../../media/Images/burger1.png";
import burger2 from  "../../media/Images/burger2.png";
import burger3 from  "../../media/Images/burger3.png";
import burger4 from  "../../media/Images/burger4.png";

const Burgers = () => {
    return (
        <>
        <div className={styles.burgers}>
            <div><img src={burger1} alt=""/></div>
            <div><img src={burger2} alt=""/></div>
            <div><img src={burger3} alt=""/></div>
            <div><img src={burger4} alt=""/></div>
        </div>

        </>
    );
};

export default Burgers;