import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import styles from "./Burgers.module.css"
import {burgersArray} from "../../../../constants";


const Burgers = () => {



    const title = {
        textAlign:"center"
    }
    const [burgerArray, setBurgers] = useState([])

    const getBurgers = () => {
        fetch("http://localhost:3001/burgers")
            .then(response => {
                if (response.status === 200){
                    return response.json();
                } else {
                    toast.error("Произошла ошибка. Статус ошибки: \" + response.status")
                }
            })
            .then (data => setBurgers(data))
    }

    const getProduct = (data) => {
        const id = data.id;
        let cart = JSON.parse(localStorage.getItem("cart")) ||  {};
        cart[id] = {...data, count: 1};
        localStorage.setItem("cart", JSON.stringify(cart))
        console.log(cart)
    }



    useEffect(() => {
        getBurgers();
    },[]);

    return (

            <div className={styles.burgers}>
                {
                    burgersArray.map(item => {
                        return (

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
                                    <button onClick={() => getProduct(item)}>В КОРЗИНУ</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


    );
}
export default Burgers;

