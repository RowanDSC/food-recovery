import React from "react";



class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="#">About</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a href="#">Volunteer</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
        );
    }
}


export default Navbar;

