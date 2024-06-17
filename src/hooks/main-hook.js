import {auth} from "../utils/api-utils";
import {useCallback, useEffect, useState} from "react";

export const useMain = () => {
    const [authData, setAuthData] = useState({});
    const tg = window.Telegram.WebApp;

    const authFetch = useCallback(async () => {
        const resAuth = await auth(tg.initData).then();
        setAuthData(resAuth);
    }, [tg])

    useEffect(() => {
        authFetch().then();
    }, [authFetch]);

    return { authData };
}