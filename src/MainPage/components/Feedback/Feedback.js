import React from 'react';
import {feedbackArray} from "../../../constants";
import styles from "./Feedback.module.css";

const Feedback = () => {



    const feedback = feedbackArray.map(item => (

            <div className={styles.feedbackBox}>
                <img src={item.image} alt=""/>
                <h1>{item.name}</h1>
                <p>{item.text}</p>
                <p>{item.date}</p>
            </div>
        )
    );
    return (

        <div className={styles.feedback}>
            <div>
                <h1>Отзывы</h1>
            </div>
            {feedback}
        </div>
    );
}
export default Feedback;