import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import HomeCarousal from "../components/HomeCarousel";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <HomeCarousal/>
      </div>
      <div className="m-3" > 
        <Card />
      
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
