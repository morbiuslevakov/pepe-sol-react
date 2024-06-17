import { useEffect, useState } from "react";
import { getUser } from "../utils/api-utils";

export const useUser = () => {
    const tg = window.Telegram.WebApp;
    const [user, setUser] = useState([]);

    const userFetch = async () => {
        const resUser = await getUser(tg.initDataUnsafe.user.id);
        setUser(user);
    }

    useEffect(() => {
        userFetch().then();
    }, [userFetch]);

    return { user };
}