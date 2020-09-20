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


export const Login = () => {

    const classes = styles.loginFormStyles(); 

    return (
        <>

        <div>
          
            <Navbar/>
        </div>

        <Container maxWidth="xs" >

            <CssBaseline />

            <div className={classes.div}>

                <Typography variant="h3">Good Afternoon.</Typography>

                <form className={classes.form}>

                    <TextField id="usernameOrEmail" label="Enter Username or Email" fullWidth margin="normal" variant="outlined"> </TextField>

                    <TextField id="password" type="password" label="Enter Password" fullWidth margin="normal" variant="outlined"> </TextField>

                    <Button type="submit" className={classes.submitButton} fullWidth margin="normal" variant="contained">Sign In</Button>



                    <Grid container>
                         <Grid item xs>
                             <Link to={"/forgotPassword"} href="#" variant="body3">Forgot password?</Link>
                        </Grid>

                        <Grid item>
                            <Link to={"/register"} variant="body3">{"Don't have an account? Register"}</Link>
                        </Grid>
                    </Grid>

                </form>

            </div>

        </Container>

        </>
    );
};

export default Login;