import {
    AppBar,




    Box, Divider,



    Grid, ListItemText,



    Typography
} from "@material-ui/core";
import React from 'react';
import { Link } from "react-router-dom";
import * as navBar from './Navbar';
import * as styles from './styles';



export const NonMobileMenuBar = () => {

    const classes = styles.nonMobileHomeBarStyles();  

    return (
        
        <Box component="nonMobileMenuBar">
    
            <AppBar align="center" position="static" style={{background: "#228b22"}}>        
                         
                <Typography variant="h5" style={{color: "black"}}></Typography>
            
                <Grid container>

                    {navBar.menuItems.map((lsItem, key)=> (

                    <Grid item xs button key={key} component={Link} className={classes.listItem} style={{ textDecoration: 'none' }} to={lsItem.listPath}>
                        <ListItemText primary={lsItem.listText} />
                    </Grid>

                    ))}

                </Grid>

            </AppBar>

        
            <Typography></Typography>
                    
    
            <Divider />

        </Box>
    )
}

export default NonMobileMenuBar 