import React from 'react';
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/Main";
import "./index.css";
import { Profile } from "./pages/profile/Profile";
import { useMain } from "./hooks/main-hook";

export const App = () => {

    const tg = window.Telegram.WebApp;

    useEffect(() => {
        useMain();
        tg.ready();
        tg.expand();
    }, [tg]);

    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<Main />} ></Route>
                    <Route path="*" element={<Main />} ></Route>
                    <Route path="/profile" element={<Profile />} ></Route>
                </Route>
            </Routes>
        </Router>
    );
}