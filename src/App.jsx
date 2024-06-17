import React, { useCallback, useState } from 'react';
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { auth, userFetch } from "./utils/api-utils";
import { theme } from "./constants/theme";
import { Main } from "./pages/main/Main";
import "./index.css";
import { Profile } from "./pages/profile/Profile";

export const App = () => {
    const tg = window.Telegram.WebApp;
    const [user, setUser] = useState({});

    const initializeMiniApp = useCallback(async () => {
        try {
            auth(tg.initData).then();
            setUser(await userFetch(tg.initDataUnsafe.user.id));
            tg.ready();
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        initializeMiniApp().then();
    }, [initializeMiniApp])

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/">
                        <Route path="/" element={<Main />} ></Route>
                        <Route path="*" element={<Main />} ></Route>
                        <Route path="/profile" element={<Profile user={user} />} ></Route>
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}