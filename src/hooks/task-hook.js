import {useEffect, useState} from "react";
import {getTask} from "../utils/api-utils";

export const useTasks = () => {
    const tg = window.Telegram.WebApp;
    const [tasks, setTasks] = useState([]);

    const tasksFetch = async () => {
        const resTasks = await getTask(tg.initDataUnsafe.user.id);
        setTasks(resTasks);
    }

    useEffect(() => {
        tasksFetch().then();
    }, [tasksFetch]);

    return { tasks };
}