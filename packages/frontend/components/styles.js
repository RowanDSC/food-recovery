import { makeStyles } from '@material-ui/core/styles';


/**
 * styles.js
 * 
 * This file serves to "store" the style sheet settings used throughout the website. 
 * The purpose of having this separate file is so that the styling settings do not
 * need to clutter the files where the main component hierarchies are established. 
 * Perhaps, to increase this design, a separate ____styles.js file can exist for each
 * component, rather than having all style setting lambda consts in here.  
 * 
 * Use this file by adding:
 * 
 * import * as styles from './styles';
 * 
 * To the top of your file that stores its styling in here.
 */

export const navBarStyles = makeStyles(theme=>({

    menuSliderContainer: 
    {
        width: 250, 
        background: "#228b22",
        height: "100%",
        justifyContent: 'center',
    },

    avatar: 
    {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },

    listItem: 
    {
        color: "white"
    },

    loginArea: 
    {
        width: 100,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }

}));

export const headerStyles = makeStyles(theme => ({

    avatar: 
    {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: 
    {
        color: "tomato"
    },
    subtitle:
     {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: 
    {
        position: "absolute", 
        top: "50%", 
        left: "50%", 
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1

    }
}));

export const homebarStyles = makeStyles(theme => ({

    logo: 
    {
        width: 100,
        height: 100,
        textAlign: "center",
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
     
    },
    loginArea:
    {
        // position: "absolute",
        // display: 'block',
        // justifyContent: 'right',
        // alignItems: 'right',

        //...StyleSheet.absoluteFillObject,
        alignSelf: 'flex-end',
        marginTop: 5,
        position: 'absolute',
      
    },
    buttons:
    {
        textAlign: "right",
     
    }
}));

export const dashboardStyles = makeStyles(theme => ({

    button:
    {
        textAlign: "right",
        alignSelf: 'flex-end',
        marginTop: 5,
        position: 'absolute',
     
    }
}));


export const loginFormStyles = makeStyles((theme) => ({
    div: 
    {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: 
    {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submitButton: 
    {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: '#228b22',
    }
  }));


export const nonMobileHomeBarStyles = makeStyles((theme) => ({

    // body: 
    // {
    //     box-sizing: border-box,
    //     font-family: system-ui
    // },
    // accountEntry: {
    //     background: #35a01a,
    //     text-align: right,
    //     color: white
    // },
    menu:
    {
        backgroundColor: '#228b22',
        alignItems: 'center',
        color: 'white',

    },   
    listItem: 
    {
        color: "white"        
    },

    // header-menu ul
    // {
    //     display: inline-flex,
    //     list-style: none,
    //     color: rgb(0, 0, 0),
    //     color: white
    // },
    // header-menu ul li
    // {
    //     width: 120px,
    //     margin: 22px,
    //     padding: 15px,
    //     color: white
    // },
    // header-menu ul li a
    // {
    //     text-decoration: none,
    //     color: rgb(0, 0, 0),
    //     color: white
    // },
    // active, .header-menu ul li:hover
    // {
    //     background: #5cbe44,
    //     border-radius: 3px
    // },
 
}));


export default navBarStyles;