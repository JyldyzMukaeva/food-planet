import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import MainBlock from "./pages/MainPage/components/MainBlock/MainBlock";
import NewProducts from "./pages/MainPage/components/NewProducts/NewProducts";
import Burgers from "./pages/MainPage/components/Burgers/Burgers";
import Menu from "./pages/MainPage/components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Pizza from "./pages/MainPage/components/Pizza/Pizza";
import Information from "./pages/MainPage/components/Information/Information";
import Feedback from "./pages/MainPage/components/Feedback/Feedback";




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
