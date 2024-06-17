import React from "react";
import { Typography, Box } from '@mui/material';

export const Frens = ({frens}) => {
    return (
        frens.map((fren) => (
            <Box style={{"width":"100%", "backgroundColor":"#0d0d0d", "display":"flex", "alignItems":"center", "paddingTop":"15px", "paddingBottom":"15px", "paddingLeft":"10px", "paddingRight":"10px", "borderBottom":"0.5px solid #3b3b3b"}}>
                <Typography style={{"fontFamily":"Manrope", "fontWeight":"500", "color":"#FFFFFF", "float":"left"}} fontSize={"0.9rem"}>
                    <span style={{"color":"#FFFFFF"}}>{fren.name}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span style={{"color":"#3b3b3b"}}>+{fren.score*0.1}</span>
                </Typography>
                <Typography style={{"fontFamily":"Manrope", "fontWeight":"500", "color":"#9f9f9f", "marginLeft":"auto", "float":"right"}} fontSize={"0.9rem"}>
                    {fren.score} NGP
                </Typography>
            </Box>
        ))
    );
}