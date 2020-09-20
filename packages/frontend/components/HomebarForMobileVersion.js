import React from 'react';
import {
    AppBar, 
    Toolbar, 
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    Grid
} from "@material-ui/core";
import {Link} from "react-router-dom";
import logo from "../images/logo.PNG";
import * as styles from './styles';


export const HomebarForMobileVersion = () => {

    const classes = styles.homebarStyles();

    return (
        <div>
  
            <Box component="homebar">
                <AppBar align="center" position="static" style={{background: "#228b22"}}>                     
                    <Typography variant="h5" style={{color: "white"}}>Welcome!</Typography>

                    <img className={classes.logo} src={logo} alt="Logo" />
                </AppBar>
            </Box>
    
        </div> 
    )
}

export default HomebarForMobileVersion;
