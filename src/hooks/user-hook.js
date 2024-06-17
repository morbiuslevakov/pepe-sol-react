import {useCallback, useEffect, useState} from "react";
import { getUser } from "../utils/api-utils";

export const useUser = () => {
    const tg = window.Telegram.WebApp;
    const [user, setUser] = useState([]);

    const userFetch = useCallback(async () => {
        const resUser = await getUser(tg.initDataUnsafe.user.id);
        setUser(resUser);
    }, [tg])

    useEffect(() => {
        userFetch().then();
    }, [userFetch]);

    return { user };
}