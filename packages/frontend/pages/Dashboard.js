import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Navbar from './Navbar'
import Header from './Header'
import { Link } from "react-router-dom";
import {
    Typography,
    Avatar, 
    Grid,
    Box,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Container,
    AppBar
}from "@material-ui/core";
import * as styles from './styles';
import HomebarForMobileVersion from './HomebarForMobileVersion';


export const Dashboard = () => {

    const classes = styles.dashboardStyles(); 

    return (
        <>

        <div>
  
            <Box component="topbar">
                <AppBar align="center" position="static" style={{background: "#800000"}}>                     
                    <Typography variant="h5" style={{color: "white"}}>My Dashboard</Typography>

                    <Link to={"/"}>
                        <button component={Link}>Go Back to Website</button>
                    </Link>
        
                </AppBar>
            </Box>

            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem>Donate Food</MenuItem>
                        <SubMenu title="Components" >
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    <MenuItem>My Events</MenuItem>
                    <MenuItem>My Stats</MenuItem>
                    <MenuItem>My Info</MenuItem>


                </Menu>
            </ProSidebar>
    
        </div> 



        
        </>
    );
};

export default Dashboard;