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


export const HomebarForNonMobileVersion = () => {

    const classes = styles.homebarStyles();


    return (
        <div>
  
            <Box component="homebar">
                <AppBar align="center" position="static" style={{background: "#228b22"}}>                     
                    <Typography variant="h5" style={{color: "white"}}>Welcome!</Typography>

                    <img className={classes.logo} src={logo} alt="Logo" />

                    

                    <Box  className={classes.loginArea}>
                
                        <Grid container className={classes.buttons}>
                            
                            <Grid item>
                                <Link to={"/login"}>
                                    <button component={Link} className={classes.button}>Login</button>
                                </Link>
                            </Grid>

                            <Grid item>
                                <Link to={"/register"}>
                                    <button component={Link} >Register</button>
                                </Link>
                            </Grid>
                        </Grid>

                        <Typography style={{color: "white"}}> <i>Don't have an account? Join us in the fight against food waste!</i> </Typography>
                        <Typography style={{color: "white"}}> <i>Just click <strong>Register</strong></i> </Typography>

                    </Box>

                </AppBar>
            </Box>
    
        </div> 
    )
}

export default HomebarForNonMobileVersion;
