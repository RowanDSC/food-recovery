import React, {useState} from 'react';

import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {Link} from "react-router-dom";
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
Box
} from "@material-ui/core"
import {
    Menu
}from "@material-ui/icons"
import avatar from "../images/logo.PNG"
import * as styles from './styles';


export const menuItems= [
    {
        listText: "Home",
        listPath: "/"

    },
    {
        listText: "About",
        listPath: "/About"

    },
    {
        listText: "The Team",
        listPath: "/theTeam"

    },
    {
        listText: "Contact",
        listPath: "/contact"

    },
    {
        listText: "Dashboard",
        listPath: "/dashboard"

    },
   
]

export const Navbar = () => {


    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    };

    const classes = styles.navBarStyles();

    const sideList = slider => (
    
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            
            <Avatar className={classes.avatar} src={avatar} alt="Food Recovery Network"/>
                
            <Link to={"/login"}>
                <button className={classes.loginArea} component={Link}>Login</button>
            </Link>

            <Typography style={{color: "white"}}>Don't have an account? Join us in the fight against food waste!</Typography>

            <Link to={"/register"}>
                <button className={classes.loginArea} component={Link}>Register</button>
            </Link>

            <Divider />

            <List>
                {menuItems.map((lsItem, key)=> (

                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                     </ListItem>

                    ))}
            </List> 

        </Box>
        
    );

    return (
        <>
  
        <Box component="nav">
            <AppBar position="static" style={{background: "#228b22"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <Menu style={{color: "white"}}/>
                    </IconButton> 
                    
                  
                    <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                        {sideList("right")}
                    </MobilRightMenuSlider>
                        
                </Toolbar>
            </AppBar>
        </Box>

        </>
    )
}

export default Navbar 