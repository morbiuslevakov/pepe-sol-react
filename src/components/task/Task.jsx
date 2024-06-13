import React from "react";
import { Typography, Box } from '@mui/material';
import {Arrow} from "../../static/Arrow";
import {Done} from "../../static/Done";

export const Task = ({index, title, reward, isCompleted}) => {
    const color = isCompleted ? "#268d1a" : "#3b3b3b";
    return (
        <Box style={{"display":"flex", "marginBottom":"15px"}}>
            <Box style={{"width":"100%", "backgroundColor":"#0d0d0d", "display":"flex", "alignItems":"center", "paddingLeft":"10px", "paddingRight":"10px", "borderBottom":`1px solid ${color}`}}>
                <Typography style={{"width":"10%", "fontFamily":"Manrope", "fontWeight":"100", "lineHeight":"1.25", "color":"#3b3b3b", "float":"left", "marginRight":"10px"}} fontSize={"3rem"}>
                    {index}
                </Typography>
                <Typography style={{"fontFamily":"Manrope", "fontWeight":"500", "color":"#FFFFFF", "float":"left"}} fontSize={"0.75rem"}>
                    <span>{title}</span><br/>
                    <span>+{reward} NGP</span>
                </Typography>
                {isCompleted && <Done/>}
                {!isCompleted && <Arrow/>}
            </Box>
        </Box>
    );
}