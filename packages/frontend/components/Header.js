import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {
    Typography,
    Avatar, 
    Grid,
    Box
}from "@material-ui/core";
import Typed from "react-typed"
import avatar from "../images/rowan_logo.png"
import * as styles from './styles';


export const Header = () => {

    const classes = styles.headerStyles();

    return (
        <Box className={classes.typedContainer}>

            <Grid container justify="center"> 

                <Avatar className={classes.avatar} src={avatar} alt="Food Recovery Network" />
          
            </Grid>
            
            <Typography className={classes.title}  variant="h4">
                <Typed strings={["__ Pounds", "of Food Saved"]} typedSpeed={40} backSpeed={60}/>
            </Typography>

            <br/>
            
            <Typography className={classes.subtitle}  variant="h4">
                <Typed strings={["Food Recovery Network", "Rowan Chapter"]} typedSpeed={40} backSpeed={60}/>
            </Typography>
        
        </Box>
    );
};

export default Header;


