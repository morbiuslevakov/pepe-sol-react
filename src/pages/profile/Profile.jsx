import React, { useCallback, useEffect, useState } from "react";
import { Box, Stack, Typography } from '@mui/material';
import { Wrapper } from "../../constants/Styled";
import { Navbar } from "../../components/navbar/Navbar";

import { Avatar } from "../../static/Avatar";
import { Infographic } from "../../components/infographic/Infographic";
import { Frens } from "../../components/frens/Frens";
import { Back } from "../../static/Back";

export const Profile = ({ user }) => {
    const tg = window.Telegram.WebApp;

    useEffect(() => {
    }, [user]);

    return (
        <Wrapper style={{"top":0, "left":0}}>
            <Back/>
            <Stack>
                <Box style={{"width":"100%", "backgroundColor":"#0d0d0d", "display":"flex", "alignItems":"center", "paddingRight":"10px"}}>
                    <Box style={{"marginRight":"20px"}}>
                        <Avatar />
                    </Box>
                    <Typography style={{"fontFamily":"OffBit", "fontWeight":"100", "lineHeight":"1.55", "letterSpacing":"2px", "color":"#FFFFFF", "float":"left"}} fontSize={"1.25rem"}>
                        <span style={{"fontFamily":"Manrope", "fontWeight":"500"}}>@{tg.initDataUnsafe.user.username}</span><br/>
                        <span style={{"color": "#268d1a"}}>{user.score} NGP</span>
                    </Typography>
                </Box>
                <Box style={{"marginTop":"20px", "marginBottom":"20px", "display":"block"}}>
                    <Infographic title="Invite frens" text="Score 10% from buddies + 2.5% from their referrals"/>
                </Box>
                <Box>
                    <Frens frens={user.reffs} />
                    <Box style={{"width":"100%", "backgroundColor":"#111111", "display":"flex", "alignItems":"center", "padding":"15px", "border":"0.5px solid #3b3b3b"}}>
                        <Typography style={{"fontFamily":"Manrope", "fontWeight":"400", "letterSpacing":"1.8px", "color":"#FFFFFF", "margin":"auto"}} fontSize={"0.75rem"}>
                            INVITE A FREN
                        </Typography>
                    </Box>
                </Box>
                <Navbar />
            </Stack>
        </Wrapper>
    );
}