import React, { useCallback, useState } from 'react';
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import {auth, getTask, userFetch} from "./utils/api-utils";
import { theme } from "./constants/theme";
import { Main } from "./pages/main/Main";
import "./index.css";
import { Profile } from "./pages/profile/Profile";

export const App = () => {
    const tg = window.Telegram.WebApp;

    const initializeMiniApp = useCallback(async () => {
        try {
            await auth(tg.initData).then();
            tg.ready();
            tg.expand();
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        initializeMiniApp();
    }, []);

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