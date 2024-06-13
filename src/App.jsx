import React from 'react';
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { fetchData } from './utils/api-utils';
import { theme } from "./constants/theme";
import { Main } from "./pages/main/Main";
import "./index.css";
import {Profile} from "./pages/profile/Profile";

export const App = () => {
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready();
        fetchData(tg.initData).then();
    }, [tg])

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/">
                        <Route path="/profile" element={<Profile />} ></Route>
                        <Route path="/" element={<Main />} ></Route>
                        <Route path="*" element={<Main />} ></Route>
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}