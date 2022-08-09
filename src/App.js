import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import NotFound from "./pages/NotFound/NotFound";


function App() {
    return (

        <BrowserRouter>
            <Header/>
            <Routes>
                <MainPage/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>


            <Footer/>
        </BrowserRouter>


    );
}

export default App;
