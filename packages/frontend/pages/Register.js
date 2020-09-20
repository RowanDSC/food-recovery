import React from 'react'
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
}from "@material-ui/core";
import * as styles from './styles';


export const Register = () => {

    const classes = styles.loginFormStyles(); 

    return (
        <>

        <div>
            
            <Navbar/>
        </div>

        <Container maxWidth="xs" >

            <CssBaseline />

            <div className={classes.div}>

                <Typography variant="h3">Hello!</Typography>

                <Typography variant="h4">Thank you for joining us.</Typography>

                <form className={classes.form}>

                    <TextField id="usernameOrEmail" label="Enter Username or Email" fullWidth margin="normal" variant="outlined"> </TextField>

                    <TextField id="password" type="password" label="Enter Password" fullWidth margin="normal" variant="outlined"> </TextField>

                    <TextField id="confirmPassword" type="password" label="Confirm Password" fullWidth margin="normal" variant="outlined"> </TextField>

                    <Button type="submit" className={classes.submitButton} fullWidth margin="normal" variant="contained">Register</Button>

                    <Grid container>

                         <Grid item xs>
                             <Typography>Interested in learning more first? <Link to={"/learnMore"} href="#" variant="body3">Learn more</Link> </Typography>
                        </Grid>

                    </Grid>

                </form>

            </div>

        </Container>

        </>
    );
};

export default Register;