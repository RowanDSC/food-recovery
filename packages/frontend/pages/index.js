import React from 'react'
import HomebarForMobileVersion from './HomebarForMobileVersion'
import HomebarForNonMobileVersion from './HomebarForNonMobileVersion'
import Navbar from './Navbar'
import Header from './Header'
import NonMobileMenuBar from './nonMobileMenuBar'
import {
  isMobile
} from 'react-device-detect';

export const Home = () => {

  if (isMobile) 
  {
    return (
      <div>
        <HomebarForMobileVersion />
        <Navbar />
        <Header />
      </div>
    );
  }
  else 
  {
    return (
      <div>
        <HomebarForNonMobileVersion />
        <NonMobileMenuBar />
        <Header />
      </div>
    );
  }

};

export default Home;
