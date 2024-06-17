import React from "react";
import { Typography, Box } from '@mui/material';

export const Infographic = ({title, text}) => {

    return (
        <Box>
            <Typography style={{"fontFamily":"Manrope", "display":"inline-flex", "float":"left", "color":"#ffffff"}} fontSize={"1.25rem"}>
                {title}
            </Typography>
            <br/>
            <Typography style={{"fontFamily":"Manrope", "fontWeight":"400", "color":"#9f9f9f", "display":"inline-flex", "float":"left", "marginTop":"5px"}} fontSize={"0.75rem"}>
                {text}
            </Typography>
        </Box>
    );
}