import {Box, ButtonGroup} from "@mui/material";
import {OutlinedButton} from "../../constants/Styled";
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';


export const Navbar = () => {
    const location = useLocation();

    return (
        <Box style={{"display":"flex", "width":"100%", "justifyContent":"space-between", "position": "fixed", "bottom":"0", "left":"0", "z-index":"999", "padding":"20px"}}>
            <ButtonGroup style={{"display":"flex", "width":"100%", "justifyContent":"space-between"}} variant="outlined" aria-label="Basic button group">
                <OutlinedButton component={Link} to="/" style={{flex:"1", backgroundColor: location.pathname === '/' ? '#26272a' : '', color: location.pathname === '/' ? '#FFFFFF' : ''}}>TASKS</OutlinedButton>
                <OutlinedButton component={Link} to="/leaderboard" style={{flex:"1", backgroundColor: location.pathname === '/leaderboard' ? '#26272a' : '', color: location.pathname === '/leaderboard' ? '#FFFFFF' : ''}}>LEADERS</OutlinedButton>
                <OutlinedButton component={Link} to="/profile" style={{flex:"1", backgroundColor: location.pathname === '/profile' ? '#26272a' : '', color: location.pathname === '/profile' ? '#FFFFFF' : ''}}>PROFILE</OutlinedButton>
            </ButtonGroup>
        </Box>
    );
}