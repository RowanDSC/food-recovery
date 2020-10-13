import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AboutHomePageSection from "../components/AboutHomePageSection";

export const Home = () => {
  return (
    <div style={{backgroundImage: "url('/images/IMG_3175.JPG')", backgroundSize: "cover"}}>
      <Navbar />
      <Header />
      <AboutHomePageSection />
    </div>
  );
};

export default Home;
