import React from 'react';
import MainBlock from "./components/MainBlock/MainBlock";
import NewProducts from "./components/NewProducts/NewProducts";
import Burgers from "./components/Burgers/Burgers";
import Menu from "./components/Menu/Menu";
import Pizza from "./components/Pizza/Pizza";
import Information from "./components/Information/Information";
import Feedback from "./components/Feedback/Feedback";
import styles from "./MainPage.module.css";


const MainPage = () => {
    return (
        <>
        <div className={styles.main}>
            <MainBlock/>
            <NewProducts/>
            <Burgers/>
            <Menu/>
            <Pizza/>
            <Information/>
            <Feedback/>
        </div>
        </>
    );
};

export default MainPage;