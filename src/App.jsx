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
    console.log("render")
    const tg = window.Telegram.WebApp;
    const [user, setUser] = useState({});
    const [tasks, setTasks] = useState([]);

    const initializeMiniApp = useCallback(async () => {
        console.log("initializeMiniApp")
        try {
            await auth(tg.initData).then(async () => {
                const fetchedUser = await userFetch(tg.initDataUnsafe.user.id);
                setUser(fetchedUser);
                const resTask = await getTask(tg.initDataUnsafe.user.id);
                setTasks(resTask);
            });
            tg.ready();
            tg.expand();
        } catch (error) {
            console.log(error)
        }
    }, [])

    initializeMiniApp().then();

    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<Main propsTasks={tasks} />} ></Route>
                    <Route path="*" element={<Main propsTasks={tasks} />} ></Route>
                    <Route path="/profile" element={<Profile user={user} />} ></Route>
                </Route>
            </Routes>
        </Router>
    );
}