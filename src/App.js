import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import MainBlock from "./MainPage/components/MainBlock/MainBlock";
import NewProducts from "./MainPage/components/NewProducts/NewProducts";
import Burgers from "./MainPage/components/Burgers/Burgers";
import Menu from "./MainPage/components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Pizza from "./MainPage/components/Pizza/Pizza";
import Information from "./MainPage/components/Information/Information";
import Feedback from "./MainPage/components/Feedback/Feedback";




function App() {
  return (
      <>
        <Header/>
        <MainBlock/>
        <NewProducts/>
        <Burgers/>
        <Menu/>
        <Pizza/>
        <Information/>
        <Feedback/>
        <Footer/>

      </>
  );
}

export default App;
