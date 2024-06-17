import React from "react";
import {Typography, Box, Button} from '@mui/material';
import { Arrow } from "../../static/Arrow";
import { Done } from "../../static/Done";
import { completeTask } from "../../utils/api-utils";

export const Task = ({id, index, link, title, reward, isCompleted}) => {
    const tg = window.Telegram.WebApp;
    const color = isCompleted ? "#268d1a" : "#3b3b3b";

    const clickCompleteTask = async () => {
        if (isCompleted !== true) {
            isCompleted = true;
            await completeTask(tg.initDataUnsafe.user.id, id).then(() => {
                window.location.replace(link);
            });

        }
    }

    return (
        <button onClick={clickCompleteTask} style={{"border":"none", "boxShadow":"none", "width":"100%"}}>
            <Box style={{"display":"flex", "marginBottom":"15px"}}>
                <Box style={{"width":"100%", "backgroundColor":"#0d0d0d", "display":"flex", "alignItems":"center", "paddingLeft":"10px", "paddingRight":"10px", "borderBottom":`1px solid ${color}`}}>
                    <Typography style={{"textAlign":"right", "width":"10%", "fontFamily":"Manrope", "fontWeight":"100", "lineHeight":"1.25", "color":"#3b3b3b", "float":"left", "marginRight":"10px"}} fontSize={"3rem"}>
                        {index}
                    </Typography>
                    <Typography style={{"fontFamily":"Manrope", "fontWeight":"500", "color":"#FFFFFF", "float":"left"}} fontSize={"0.75rem"}>
                        <span>{title}</span><br/>
                        <span style={{"color":"#9f9f9f", "float":"left", "marginRight":"auto"}}>+{reward} NGP</span>
                    </Typography>
                    {isCompleted && <Done/>}
                    {!isCompleted && <Arrow/>}
                </Box>
            </Box>
        </button>
    );
}