import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import NewProducts from "./Components/NewProducts/NewProducts";
import Burgers from "./Components/Burgers/Burgers";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Pizza from "./Components/Pizza/Pizza";




function App() {
  return (
      <>
        <Header/>
        <Main/>
        <NewProducts/>
        <Burgers/>
        <Pizza/>
        <Menu/>
        <Footer/>

      </>
  );
}

export default App;
