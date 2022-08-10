import React from 'react';
import {feedbackArray} from "../../../../constants";
import styles from "./Feedback.module.css";
import backImg from '../../../../media/Images/frame.png';
import pen from "../../../../media/Images/pen.png";

const Feedback = () => {



    const feedback = feedbackArray.map(item => (

            <div className={styles.feedbackBoxParent}>
                <img className={styles.feedbackBox} src={backImg} alt=""/>
                <div className={styles.feedbackBoxChild}>
                <img className={styles.userpic} src={item.image} alt=""/>
                <h1>{item.name}<img src={pen} alt=""/></h1>
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