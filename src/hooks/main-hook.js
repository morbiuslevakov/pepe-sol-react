import {auth} from "../utils/api-utils";
import {useEffect} from "react";

export const useMain = () => {
    const tg = window.Telegram.WebApp;

    const authFetch = async () => {
        await auth(tg.initData).then();
    }

    useEffect(() => {
        authFetch().then();
    }, [authFetch]);
}