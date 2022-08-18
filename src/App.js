import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";

import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import Menu from "./pages/MainPage/components/Menu/Menu";
import NotFound from "./pages/NotFound/NotFound";
import CartPage from "./pages/CartPage/CartPage";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/CartPage" element={<CartPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>

            <Footer/>
            <Toaster/>
        </BrowserRouter>
    );
}

export default App;
