import {auth} from "../utils/api-utils";
import {useEffect, useState} from "react";

export const useMain = () => {
    const [authData, setAuthData] = useState({});
    const tg = window.Telegram.WebApp;

    const authFetch = async () => {
        const resAuth = await auth(tg.initData).then();
        setAuthData(resAuth);
    }

    useEffect(() => {
        authFetch().then();
    }, [authFetch]);

    return { authData };
}