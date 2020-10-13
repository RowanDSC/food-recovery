import React from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About_home_page_section from "../components/About_home_page_section";

export const Home = () => {
 
    return (
      <div>
        <Navbar/>
        <Header id="block1"/>
        <About_home_page_section id="block2"/>
      </div>
    );


};

export default Home;
