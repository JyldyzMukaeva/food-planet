import React from 'react';
import {feedbackArray} from "../../../../constants";
import styles from "./Feedback.module.css";

const Feedback = () => {



    const feedback = feedbackArray.map(item => (

            <div className={styles.feedbackBoxParent}>
                <img className={styles.feedbackBox} src={item.image1} alt=""/>
                <div className={styles.feedbackBoxChild}>
                <img src={item.image} alt=""/>
                <h1>{item.name}<img src={item.image2} alt=""/></h1>
                <p>{item.text}</p>
                <p className={styles.date}>{item.date}</p>
                </div>
            </div>
        )
    );
    return (
        <>

            <div className={styles.feedback1}>
                <h1>Отзывы</h1>
            </div>

             <div className={styles.feedback2}>
                 {feedback}
             </div>

        </>
    );
}
export default Feedback;