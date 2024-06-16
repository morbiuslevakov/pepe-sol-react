import React, {useCallback, useState} from 'react';
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { auth, test } from "./utils/api-utils";
import { theme } from "./constants/theme";
import { Main } from "./pages/main/Main";
import "./index.css";
import { Profile } from "./pages/profile/Profile";
import {useApiRequest} from "./hooks/use-api-request.hook";

export const App = () => {
    const tg = window.Telegram.WebApp;
    // const apiRequest = useApiRequest();
    // const [auth, setAuth] = useState({});

    const fetchInfo = useCallback(async () => {
        try {
            auth(tg.initData).then(() => {
                return test();
            }).then(() => {
                console.log("Вторая функция выполнена после первой.");
            }).catch((error) => {
                console.error("Произошла ошибка:", error);
            });
            // const resAuth = await apiRequest(auth, tg.initData);
            // setAuth(resAuth);
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        tg.ready();
        fetchInfo().then();
    }, [fetchInfo])

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