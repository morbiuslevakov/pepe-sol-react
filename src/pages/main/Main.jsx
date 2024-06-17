import React, {useState, useEffect, useCallback} from "react";
import { Stack, Typography, Box } from '@mui/material';
import { Wrapper } from "../../constants/Styled";
import { Infographic } from "../../components/infographic/Infographic";
import { Task } from "../../components/task/Task";
import { Navbar } from "../../components/navbar/Navbar";
import { Back } from "../../static/Back";
import { getTask } from "../../utils/api-utils";
import {useTasks} from "../../hooks/task-hook";
import {useMain} from "../../hooks/main-hook";

export const Main = () => {
    const { authData } = useMain();
    const tg = window.Telegram.WebApp;
    const { tasks } = useTasks();


    return (
        <Wrapper style={{"top":0, "left":0}}>
            <Back/>
            <Stack>
                <Box style={{"marginTop":"30px", "display":"block"}}>
                    <Typography style={{"fontFamily":"OffBit", "display":"inline-flex", "float":"left"}} fontSize={"1rem"}>
                        <span style={{"color":"#FFFFFF", "display":"block"}}>Hello</span>
                        <span>&nbsp;</span>
                        <span style={{"color":"#268d1a", "display":"block"}}>@{tg.initDataUnsafe.user.username}</span>
                    </Typography>
                    <Typography style={{"fontFamily":"OffBit", "display":"inline-flex", "float":"right"}} fontSize={"1rem"}>
                        #0144
                    </Typography>
                </Box>
                <Box style={{"marginTop":"20px", "marginBottom":"20px", "display":"block"}}>
                    <Infographic title="YOUR DAILY TASKS:" text="We'll reward you immediately with points after each task completion."/>
                </Box>
                <Box>
                    {
                        tasks.map((task, index) => {
                            return <Task id={task.id} index={index+1} link={task.link} title={task.title} reward={task.reward} isCompleted={task.completed} />;
                        })
                    }
                </Box>
                <Navbar />
            </Stack>
        </Wrapper>
    );
}